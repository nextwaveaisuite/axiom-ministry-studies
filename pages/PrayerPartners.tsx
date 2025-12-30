import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Heart, Send, Check, X, UserPlus } from "lucide-react";
import { toast } from "sonner";

export default function PrayerPartners() {
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const { data: suggestions = [], refetch: refetchSuggestions } = trpc.prayerPartners.getSuggestions.useQuery();
  const { data: pendingRequests = [], refetch: refetchPending } = trpc.prayerPartners.getPendingRequests.useQuery();
  const { data: activePartnerships = [], refetch: refetchActive } = trpc.prayerPartners.getActivePartnerships.useQuery();

  const sendRequest = trpc.prayerPartners.sendRequest.useMutation({
    onSuccess: () => {
      toast.success("Prayer partner request sent!");
      setSelectedPartner(null);
      setMessage("");
      refetchSuggestions();
    },
  });

  const respondToRequest = trpc.prayerPartners.respondToRequest.useMutation({
    onSuccess: (_, variables) => {
      toast.success(variables.accept ? "Prayer partner accepted!" : "Request declined");
      refetchPending();
      refetchActive();
    },
  });

  const endPartnership = trpc.prayerPartners.endPartnership.useMutation({
    onSuccess: () => {
      toast.success("Partnership ended");
      refetchActive();
      refetchSuggestions();
    },
  });

  const handleSendRequest = (partnerId: number) => {
    sendRequest.mutate({ partnerId, message });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-amber-700" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Prayer Partners</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with fellow believers for mutual prayer, accountability, and spiritual encouragement
            </p>
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm text-gray-700 italic">
                "Two are better than one... If either of them falls down, one can help the other up." - Ecclesiastes 4:9-10
              </p>
            </div>
          </div>

          <Tabs defaultValue="suggestions" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="suggestions">
                <UserPlus className="w-4 h-4 mr-2" />
                Find Partners
              </TabsTrigger>
              <TabsTrigger value="pending">
                <Send className="w-4 h-4 mr-2" />
                Pending ({pendingRequests.length})
              </TabsTrigger>
              <TabsTrigger value="active">
                <Heart className="w-4 h-4 mr-2" />
                Active ({activePartnerships.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="suggestions" className="space-y-4">
              {suggestions.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No partner suggestions available at this time</p>
                  </CardContent>
                </Card>
              ) : (
                suggestions.map((user: any) => (
                  <Card key={user.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-amber-100 text-amber-700">
                              {user.name?.charAt(0) || "U"}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle>{user.name || "Anonymous"}</CardTitle>
                            <CardDescription>{user.email}</CardDescription>
                          </div>
                        </div>
                        {selectedPartner === user.id ? (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedPartner(null)}
                          >
                            Cancel
                          </Button>
                        ) : (
                          <Button
                            onClick={() => setSelectedPartner(user.id)}
                            className="bg-amber-600 hover:bg-amber-700"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Request Partner
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    {selectedPartner === user.id && (
                      <CardContent>
                        <div className="space-y-4">
                          <Textarea
                            placeholder="Share why you'd like to be prayer partners (optional)..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={3}
                          />
                          <Button
                            onClick={() => handleSendRequest(user.id)}
                            disabled={sendRequest.isPending}
                            className="w-full bg-amber-600 hover:bg-amber-700"
                          >
                            Send Request
                          </Button>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))
              )}
            </TabsContent>

            <TabsContent value="pending" className="space-y-4">
              {pendingRequests.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Send className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No pending prayer partner requests</p>
                  </CardContent>
                </Card>
              ) : (
                pendingRequests.map((request: any) => (
                  <Card key={request.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-amber-100 text-amber-700">
                              {request.requester?.name?.charAt(0) || "U"}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle>{request.requester?.name || "Anonymous"}</CardTitle>
                            <CardDescription>{request.requester?.email}</CardDescription>
                          </div>
                        </div>
                        <Badge>Pending</Badge>
                      </div>
                    </CardHeader>
                    {request.message && (
                      <CardContent>
                        <p className="text-gray-700 italic mb-4">"{request.message}"</p>
                      </CardContent>
                    )}
                    <CardContent className="flex gap-2">
                      <Button
                        onClick={() => respondToRequest.mutate({ requestId: request.id, accept: true })}
                        disabled={respondToRequest.isPending}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        <Check className="w-4 h-4 mr-2" />
                        Accept
                      </Button>
                      <Button
                        onClick={() => respondToRequest.mutate({ requestId: request.id, accept: false })}
                        disabled={respondToRequest.isPending}
                        variant="outline"
                        className="flex-1"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Decline
                      </Button>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>

            <TabsContent value="active" className="space-y-4">
              {activePartnerships.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No active prayer partnerships yet</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Send a request to connect with a prayer partner
                    </p>
                  </CardContent>
                </Card>
              ) : (
                activePartnerships.map((partnership: any) => (
                  <Card key={partnership.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-amber-100 text-amber-700">
                              {partnership.partner?.name?.charAt(0) || "U"}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle>{partnership.partner?.name || "Anonymous"}</CardTitle>
                            <CardDescription>{partnership.partner?.email}</CardDescription>
                            <Badge className="mt-2 bg-green-100 text-green-700">Active Partner</Badge>
                          </div>
                        </div>
                        <Button
                          onClick={() => endPartnership.mutate({ partnershipId: partnership.id })}
                          disabled={endPartnership.isPending}
                          variant="outline"
                          size="sm"
                        >
                          End Partnership
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
