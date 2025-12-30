import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MessageSquare, Plus, Trash2, Send } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { formatDistanceToNow } from "date-fns";

interface DiscussionForumProps {
  pathway: string;
  moduleNumber: number;
}

export default function DiscussionForum({ pathway, moduleNumber }: DiscussionForumProps) {
  const { user, isAuthenticated } = useAuth();
  const [showNewDiscussion, setShowNewDiscussion] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedDiscussionId, setSelectedDiscussionId] = useState<number | null>(null);
  const [commentContent, setCommentContent] = useState("");

  const utils = trpc.useUtils();
  
  const { data: discussions = [], isLoading } = trpc.discussions.getByModule.useQuery({
    pathway,
    moduleNumber,
  });

  const { data: comments = [] } = trpc.comments.getByDiscussion.useQuery(
    { discussionId: selectedDiscussionId! },
    { enabled: selectedDiscussionId !== null }
  );

  const createDiscussionMutation = trpc.discussions.create.useMutation({
    onSuccess: () => {
      utils.discussions.getByModule.invalidate({ pathway, moduleNumber });
      setTitle("");
      setContent("");
      setShowNewDiscussion(false);
      toast.success("Discussion created");
    },
  });

  const createCommentMutation = trpc.comments.create.useMutation({
    onSuccess: () => {
      utils.comments.getByDiscussion.invalidate({ discussionId: selectedDiscussionId! });
      setCommentContent("");
      toast.success("Comment added");
    },
  });

  const deleteDiscussionMutation = trpc.discussions.delete.useMutation({
    onSuccess: () => {
      utils.discussions.getByModule.invalidate({ pathway, moduleNumber });
      setSelectedDiscussionId(null);
      toast.success("Discussion deleted");
    },
  });

  const deleteCommentMutation = trpc.comments.delete.useMutation({
    onSuccess: () => {
      utils.comments.getByDiscussion.invalidate({ discussionId: selectedDiscussionId! });
      toast.success("Comment deleted");
    },
  });

  const handleCreateDiscussion = () => {
    if (!title || !content) {
      toast.error("Please fill in all fields");
      return;
    }
    createDiscussionMutation.mutate({ pathway, moduleNumber, title, content });
  };

  const handleCreateComment = () => {
    if (!commentContent) {
      toast.error("Please enter a comment");
      return;
    }
    createCommentMutation.mutate({ discussionId: selectedDiscussionId!, content: commentContent });
  };

  if (isLoading) {
    return <div className="text-center py-8 text-muted-foreground">Loading discussions...</div>;
  }

  if (selectedDiscussionId) {
    const discussion = discussions.find(d => d.discussion.id === selectedDiscussionId);
    if (!discussion) return null;

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={() => setSelectedDiscussionId(null)}>
            ← Back to Discussions
          </Button>
          {isAuthenticated && user?.id === discussion.discussion.userId && (
            <Button
              variant="destructive"
              size="sm"
              onClick={() => deleteDiscussionMutation.mutate({ id: selectedDiscussionId })}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Discussion
            </Button>
          )}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{discussion.discussion.title}</CardTitle>
            <CardDescription>
              Posted by {discussion.user?.name || "Anonymous"} •{" "}
              {formatDistanceToNow(new Date(discussion.discussion.createdAt), { addSuffix: true })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground whitespace-pre-wrap">{discussion.discussion.content}</p>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Comments ({comments.length})</h3>
          
          {isAuthenticated ? (
            <Card>
              <CardContent className="pt-6 space-y-3">
                <Textarea
                  placeholder="Add your comment..."
                  value={commentContent}
                  onChange={(e) => setCommentContent(e.target.value)}
                  rows={3}
                />
                <Button onClick={handleCreateComment} disabled={createCommentMutation.isPending}>
                  <Send className="w-4 h-4 mr-2" />
                  Post Comment
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-muted-foreground mb-4">Sign in to join the conversation</p>
                <Button asChild>
                  <a href={getLoginUrl()}>Sign In</a>
                </Button>
              </CardContent>
            </Card>
          )}

          {comments.map(({ comment, user: commentUser }) => (
            <Card key={comment.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium">{commentUser?.name || "Anonymous"}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                    </p>
                  </div>
                  {isAuthenticated && user?.id === comment.userId && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteCommentMutation.mutate({ id: comment.id })}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  )}
                </div>
                <p className="text-foreground whitespace-pre-wrap">{comment.content}</p>
              </CardContent>
            </Card>
          ))}

          {comments.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Module Discussions</h3>
        </div>
        {isAuthenticated && !showNewDiscussion && (
          <Button onClick={() => setShowNewDiscussion(true)}>
            <Plus className="w-4 h-4 mr-2" />
            New Discussion
          </Button>
        )}
      </div>

      {showNewDiscussion && (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Start a New Discussion</CardTitle>
            <CardDescription>Share insights, ask questions, or encourage others</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="What's your discussion about?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Share your thoughts..."
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleCreateDiscussion} disabled={createDiscussionMutation.isPending}>
                Post Discussion
              </Button>
              <Button variant="outline" onClick={() => setShowNewDiscussion(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {!isAuthenticated && !showNewDiscussion && (
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground mb-4">Sign in to start a discussion</p>
            <Button asChild>
              <a href={getLoginUrl()}>Sign In</a>
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="space-y-3">
        {discussions.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center text-muted-foreground">
              No discussions yet. Be the first to start a conversation!
            </CardContent>
          </Card>
        ) : (
          discussions.map(({ discussion, user: discussionUser }) => (
            <Card
              key={discussion.id}
              className="cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => setSelectedDiscussionId(discussion.id)}
            >
              <CardHeader>
                <CardTitle className="text-base">{discussion.title}</CardTitle>
                <CardDescription>
                  Posted by {discussionUser?.name || "Anonymous"} •{" "}
                  {formatDistanceToNow(new Date(discussion.createdAt), { addSuffix: true })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {discussion.content}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
