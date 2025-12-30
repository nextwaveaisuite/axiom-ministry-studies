import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Settings, Video, Music, Save, Plus, Trash2 } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

interface MediaResource {
  id: string;
  title: string;
  url: string;
  duration: string;
  description: string;
}

export default function Admin() {
  const { user, isAuthenticated, loading } = useAuth();
  const [selectedPathway, setSelectedPathway] = useState("mens");
  const [selectedModule, setSelectedModule] = useState("1");
  const [mediaType, setMediaType] = useState<"video" | "audio">("video");
  
  // Form state
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>
              Please sign in to access the admin panel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href={getLoginUrl()}>Sign In</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Check if user is admin (you can add role check here)
  const isAdmin = user?.role === "admin";

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              You don't have permission to access the admin panel
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const handleAddMedia = () => {
    if (!title || !url) {
      toast.error("Please fill in title and URL");
      return;
    }

    const storageKey = `axiom-admin-${mediaType}-${selectedPathway}-${selectedModule}`;
    const existing = JSON.parse(localStorage.getItem(storageKey) || "[]");
    
    const newMedia: MediaResource = {
      id: Date.now().toString(),
      title,
      url,
      duration,
      description,
    };

    existing.push(newMedia);
    localStorage.setItem(storageKey, JSON.stringify(existing));

    // Clear form
    setTitle("");
    setUrl("");
    setDuration("");
    setDescription("");

    toast.success(`${mediaType === "video" ? "Video" : "Audio"} resource added successfully`);
  };

  const getMediaResources = (): MediaResource[] => {
    const storageKey = `axiom-admin-${mediaType}-${selectedPathway}-${selectedModule}`;
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
  };

  const handleDeleteMedia = (id: string) => {
    const storageKey = `axiom-admin-${mediaType}-${selectedPathway}-${selectedModule}`;
    const existing = getMediaResources();
    const updated = existing.filter(m => m.id !== id);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    toast.success("Resource deleted");
  };

  const mediaResources = getMediaResources();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Settings className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-serif font-bold text-foreground">
              Admin Panel
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Manage video and audio resources for all ministry pathways
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Add Media Form */}
          <Card className="shadow-lg border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Plus className="w-5 h-5 text-primary" />
                <CardTitle>Add Media Resource</CardTitle>
              </div>
              <CardDescription>
                Add video or audio content to module learning materials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Pathway</Label>
                  <Select value={selectedPathway} onValueChange={setSelectedPathway}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mens">Men's Ministry</SelectItem>
                      <SelectItem value="womens">Women's Ministry</SelectItem>
                      <SelectItem value="youth">Youth Ministry</SelectItem>
                      <SelectItem value="teaching">Teaching Ministry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Module</Label>
                  <Select value={selectedModule} onValueChange={setSelectedModule}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <SelectItem key={num} value={num.toString()}>
                          Module {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Media Type</Label>
                <Select value={mediaType} onValueChange={(v) => setMediaType(v as "video" | "audio")}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video">
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4" />
                        Video
                      </div>
                    </SelectItem>
                    <SelectItem value="audio">
                      <div className="flex items-center gap-2">
                        <Music className="w-4 h-4" />
                        Audio
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Introduction to Men's Ministry"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="url">URL * (YouTube, Vimeo, or direct link)</Label>
                <Input
                  id="url"
                  placeholder="https://youtube.com/watch?v=..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration (optional)</Label>
                <Input
                  id="duration"
                  placeholder="e.g., 15:30"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Brief description of the content..."
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <Button onClick={handleAddMedia} className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Add Resource
              </Button>
            </CardContent>
          </Card>

          {/* Current Resources */}
          <Card className="shadow-lg border-border/50">
            <CardHeader>
              <CardTitle>
                Current Resources
              </CardTitle>
              <CardDescription>
                {selectedPathway.charAt(0).toUpperCase() + selectedPathway.slice(1)} Ministry - Module {selectedModule} - {mediaType === "video" ? "Videos" : "Audio"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {mediaResources.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No resources added yet
                </p>
              ) : (
                <div className="space-y-3">
                  {mediaResources.map((resource) => (
                    <div
                      key={resource.id}
                      className="p-4 border border-border rounded-lg space-y-2"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium">{resource.title}</h4>
                          {resource.duration && (
                            <p className="text-xs text-muted-foreground">{resource.duration}</p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteMedia(resource.id)}
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground break-all">{resource.url}</p>
                      {resource.description && (
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 shadow-lg border-primary/10 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg">How to Use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• Select the pathway and module you want to add content to</p>
            <p>• Choose whether you're adding video or audio content</p>
            <p>• Paste the YouTube, Vimeo, or direct media URL</p>
            <p>• Resources will appear in the corresponding module's learning tabs</p>
            <p>• Users can watch/listen and track their progress</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
