import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Heart, MessageCircle, CheckCircle, TrendingUp, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrayerStats() {
  const { user, isAuthenticated } = useAuth();
  const { data: stats } = trpc.prayer.getMyStats.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Prayer Statistics</CardTitle>
            <CardDescription>Login to view your prayer activity</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => (window.location.href = getLoginUrl())} className="w-full">
              Login to Continue
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const answeredPercentage =
    stats && stats.myRequests > 0
      ? Math.round((stats.myRequestsAnswered / stats.myRequests) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4">Your Prayer Journey</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how God is working through your prayers and the community's intercession
          </p>
          <p className="text-sm text-muted-foreground italic mt-2">
            "The prayer of a righteous person is powerful and effective." — James 5:16
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {/* Total Prayer Requests */}
          <Card className="shadow-md border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prayer Requests</CardTitle>
              <MessageCircle className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{stats?.myRequests || 0}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Total requests you've shared
              </p>
            </CardContent>
          </Card>

          {/* Active Requests */}
          <Card className="shadow-md border-blue-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Requests</CardTitle>
              <TrendingUp className="h-5 w-5 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-500">{stats?.myActiveRequests || 0}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Currently being prayed for
              </p>
            </CardContent>
          </Card>

          {/* Answered Prayers */}
          <Card className="shadow-md border-green-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Answered Prayers</CardTitle>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500">{stats?.myRequestsAnswered || 0}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {answeredPercentage}% of your requests
              </p>
            </CardContent>
          </Card>

          {/* Prayers Offered */}
          <Card className="shadow-md border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prayers Offered</CardTitle>
              <Heart className="h-5 w-5 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-500">{stats?.prayersOffered || 0}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Times you've prayed for others
              </p>
            </CardContent>
          </Card>

          {/* Impact Score */}
          <Card className="shadow-md border-amber-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Community Impact</CardTitle>
              <Award className="h-5 w-5 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-500">
                {(stats?.prayersOffered || 0) + (stats?.myRequests || 0)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Total prayer interactions
              </p>
            </CardContent>
          </Card>

          {/* Faithfulness Streak */}
          <Card className="shadow-md border-pink-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Spiritual Growth</CardTitle>
              <Sparkles className="h-5 w-5 text-pink-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-pink-500">
                {stats && stats.prayersOffered > 0 ? "Active" : "Growing"}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Your prayer journey status
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Encouragement Section */}
        <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Your Spiritual Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {stats && stats.prayersOffered > 0 && (
              <div className="p-4 bg-background/50 rounded-lg">
                <p className="font-medium text-foreground mb-1">🙏 Faithful Intercessor</p>
                <p className="text-sm text-muted-foreground">
                  You've offered {stats.prayersOffered} {stats.prayersOffered === 1 ? "prayer" : "prayers"} for others in the community. Your intercession is making a difference!
                </p>
              </div>
            )}

            {stats && stats.myRequestsAnswered > 0 && (
              <div className="p-4 bg-background/50 rounded-lg">
                <p className="font-medium text-foreground mb-1">✨ Testimony of Faithfulness</p>
                <p className="text-sm text-muted-foreground">
                  God has answered {stats.myRequestsAnswered} of your {stats.myRequests === 1 ? "prayer request" : "prayer requests"}. Remember to give thanks and share how He's working!
                </p>
              </div>
            )}

            {stats && stats.myActiveRequests > 0 && (
              <div className="p-4 bg-background/50 rounded-lg">
                <p className="font-medium text-foreground mb-1">💙 Trusting in Prayer</p>
                <p className="text-sm text-muted-foreground">
                  You have {stats.myActiveRequests} active {stats.myActiveRequests === 1 ? "request" : "requests"}. The community is standing with you in prayer. Keep trusting!
                </p>
              </div>
            )}

            {(!stats || (stats.prayersOffered === 0 && stats.myRequests === 0)) && (
              <div className="p-4 bg-background/50 rounded-lg">
                <p className="font-medium text-foreground mb-1">🌱 Begin Your Prayer Journey</p>
                <p className="text-sm text-muted-foreground">
                  Start by sharing a prayer request or praying for others in the community. Every prayer makes a difference!
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-center text-muted-foreground italic">
                "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." — Philippians 4:6
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
