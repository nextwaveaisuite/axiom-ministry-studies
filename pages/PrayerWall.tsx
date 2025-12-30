import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Heart, MessageCircle, CheckCircle, Plus } from "lucide-react";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";

export default function PrayerWall() {
  const { user, isAuthenticated } = useAuth();
  const [filter, setFilter] = useState<"all" | "active" | "answered">("all");
  const [newRequest, setNewRequest] = useState({ title: "", description: "", isAnonymous: false });
  const [selectedRequest, setSelectedRequest] = useState<number | null>(null);
  const [prayerText, setPrayerText] = useState("");
  const [prayerAnonymous, setPrayerAnonymous] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const utils = trpc.useUtils();
  const { data: requests = [] } = trpc.prayer.list.useQuery();
  const { data: responses = [] } = trpc.prayer.getResponses.useQuery(
    { requestId: selectedRequest || 0 },
    { enabled: selectedRequest !== null }
  );

  const createMutation = trpc.prayer.create.useMutation({
    onSuccess: () => {
      utils.prayer.list.invalidate();
      setNewRequest({ title: "", description: "", isAnonymous: false });
      setDialogOpen(false);
      toast.success("Prayer request posted!");
    },
  });

  const markAnsweredMutation = trpc.prayer.markAnswered.useMutation({
    onSuccess: () => {
      utils.prayer.list.invalidate();
      toast.success("Marked as answered!");
    },
  });

  const addPrayerMutation = trpc.prayer.addPrayer.useMutation({
    onSuccess: () => {
      utils.prayer.list.invalidate();
      utils.prayer.getResponses.invalidate();
      setPrayerText("");
      setPrayerAnonymous(false);
      toast.success("Prayer added!");
    },
  });

  const filteredRequests = requests.filter((req) => {
    if (filter === "active") return req.isAnswered === 0;
    if (filter === "answered") return req.isAnswered === 1;
    return true;
  });

  const handleSubmitRequest = () => {
    if (!newRequest.title || !newRequest.description) {
      toast.error("Please fill in all fields");
      return;
    }
    createMutation.mutate(newRequest);
  };

  const handleAddPrayer = (requestId: number) => {
    if (!prayerText.trim()) {
      toast.error("Please write a prayer");
      return;
    }
    addPrayerMutation.mutate({
      requestId,
      prayer: prayerText,
      isAnonymous: prayerAnonymous,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4">Community Prayer Wall</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Share your prayer requests and lift one another up in prayer. We are called to bear one another's burdens.
          </p>
          <p className="text-sm text-muted-foreground italic mt-2">
            "Bear one another's burdens, and so fulfill the law of Christ." — Galatians 6:2
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All Requests
            </Button>
            <Button
              variant={filter === "active" ? "default" : "outline"}
              onClick={() => setFilter("active")}
            >
              Active
            </Button>
            <Button
              variant={filter === "answered" ? "default" : "outline"}
              onClick={() => setFilter("answered")}
            >
              Answered
            </Button>
          </div>

          {isAuthenticated ? (
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Post Prayer Request
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Share a Prayer Request</DialogTitle>
                  <DialogDescription>
                    Let the community pray with you and for you.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Brief summary of your request"
                      value={newRequest.title}
                      onChange={(e) => setNewRequest({ ...newRequest, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Share more details about your prayer need..."
                      rows={5}
                      value={newRequest.description}
                      onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="anonymous"
                      checked={newRequest.isAnonymous}
                      onCheckedChange={(checked) =>
                        setNewRequest({ ...newRequest, isAnonymous: checked as boolean })
                      }
                    />
                    <Label htmlFor="anonymous" className="text-sm">
                      Post anonymously
                    </Label>
                  </div>
                  <Button onClick={handleSubmitRequest} className="w-full">
                    Submit Prayer Request
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <Button onClick={() => (window.location.href = getLoginUrl())}>
              Login to Post Request
            </Button>
          )}
        </div>

        {/* Prayer Requests */}
        <div className="space-y-6">
          {filteredRequests.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No prayer requests yet. Be the first to share!</p>
              </CardContent>
            </Card>
          ) : (
            filteredRequests.map((request) => (
              <Card key={request.id} className="shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{request.title}</CardTitle>
                      <CardDescription className="text-sm">
                        Posted {formatDistanceToNow(new Date(request.createdAt))} ago
                        {request.isAnonymous === 0 && " • Anonymous"}
                      </CardDescription>
                    </div>
                    {request.isAnswered === 1 && (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">Answered</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap">
                    {request.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{request.prayerCount || 0} prayers</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1"
                      onClick={() =>
                        setSelectedRequest(selectedRequest === request.id ? null : request.id)
                      }
                    >
                      <MessageCircle className="w-4 h-4" />
                      {selectedRequest === request.id ? "Hide" : "View"} Prayers
                    </Button>
                    {isAuthenticated && user?.id === request.userId && request.isAnswered === 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => markAnsweredMutation.mutate({ id: request.id })}
                      >
                        Mark as Answered
                      </Button>
                    )}
                  </div>

                  {/* Prayer Responses */}
                  {selectedRequest === request.id && (
                    <div className="mt-4 border-t pt-4 space-y-4">
                      {isAuthenticated && (
                        <div className="space-y-3">
                          <Textarea
                            placeholder="Write a prayer for this request..."
                            rows={3}
                            value={prayerText}
                            onChange={(e) => setPrayerText(e.target.value)}
                          />
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id={`prayer-anon-${request.id}`}
                                checked={prayerAnonymous}
                                onCheckedChange={(checked) => setPrayerAnonymous(checked as boolean)}
                              />
                              <Label htmlFor={`prayer-anon-${request.id}`} className="text-sm">
                                Post anonymously
                              </Label>
                            </div>
                            <Button size="sm" onClick={() => handleAddPrayer(request.id)}>
                              Add Prayer
                            </Button>
                          </div>
                        </div>
                      )}

                      <div className="space-y-3">
                        {responses.length === 0 ? (
                          <p className="text-sm text-muted-foreground italic">
                            No prayers yet. Be the first to pray!
                          </p>
                        ) : (
                          responses.map((response) => (
                            <div key={response.id} className="bg-muted/30 p-4 rounded-lg">
                              <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap">
                                {response.prayer}
                              </p>
                              <p className="text-xs text-muted-foreground mt-2">
                                {response.isAnonymous === 1 ? "Anonymous" : "A fellow believer"} •{" "}
                                {formatDistanceToNow(new Date(response.createdAt))} ago
                              </p>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
