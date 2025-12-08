import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useAuth } from "@/lib/authContext";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Crown, 
  Users, 
  Gift, 
  Target, 
  Calendar, 
  Flame, 
  Trophy,
  Share2,
  Copy,
  Star,
  Zap,
  TrendingUp,
  Award,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Loader2
} from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";

interface GrowthSummary {
  xp: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  referrals: number;
  referralTier: string;
  isGuildMember: boolean;
  guildTier: string | null;
  activeMissions: number;
  completedMissions: number;
  upcomingEvents: number;
}

interface ReferralStats {
  id: string;
  userId: string;
  referralCode: string;
  tier: string;
  totalReferrals: number;
  activeReferrals: number;
  totalEarnings: string;
  lifetimeEarnings: string;
}

export default function GrowthHub() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");

  // Fetch growth summary
  const { data: summary, isLoading: summaryLoading } = useQuery<GrowthSummary>({
    queryKey: ["/api/growth/summary"],
    enabled: !!user,
  });

  // Fetch referral stats
  const { data: referralStats } = useQuery<ReferralStats>({
    queryKey: ["/api/growth/referrals/stats"],
    enabled: !!user,
  });

  // Daily check-in mutation
  const checkinMutation = useMutation({
    mutationFn: () => apiRequest("POST", "/api/growth/checkin"),
    onSuccess: (data: any) => {
      if (data.success) {
        toast({
          title: "Checked in!",
          description: `Day ${data.currentStreak} streak! +${data.xpAwarded} XP, +${data.axmAwarded} AXM`,
        });
        queryClient.invalidateQueries({ queryKey: ["/api/growth/summary"] });
        queryClient.invalidateQueries({ queryKey: ["/api/growth/streak"] });
      } else {
        toast({
          title: "Already checked in",
          description: data.message,
        });
      }
    },
  });

  const referralCode = referralStats?.referralCode || user?.referralCode || `LUM${user?.username?.toUpperCase().slice(0, 4) || "USER"}`;
  const referralLink = `https://joinlumina.io/join?ref=${referralCode}`;

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Link copied!",
      description: "Share this link with friends to earn rewards",
    });
  };

  return (
    <MainLayout>
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold" data-testid="text-growth-hub-title">Growth Hub</h1>
          </div>
          <p className="text-muted-foreground">Your command center for earning rewards and growing with Lumina</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm text-muted-foreground">Current Streak</p>
                  {summaryLoading ? (
                    <Skeleton className="h-8 w-24" />
                  ) : (
                    <p className="text-2xl font-bold flex items-center gap-1" data-testid="text-streak-count">
                      <Flame className="h-5 w-5 text-orange-500" />
                      {summary?.currentStreak || 0} days
                    </p>
                  )}
                </div>
                <Badge variant="secondary" className="bg-orange-500/10 text-orange-500">
                  +{Math.min((summary?.currentStreak || 0) * 5, 50)}% bonus
                </Badge>
              </div>
              <Button 
                size="sm" 
                className="w-full mt-3" 
                onClick={() => checkinMutation.mutate()}
                disabled={checkinMutation.isPending}
                data-testid="button-daily-checkin"
              >
                {checkinMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                Daily Check-in
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm text-muted-foreground">Total XP</p>
                  {summaryLoading ? (
                    <Skeleton className="h-8 w-20" />
                  ) : (
                    <p className="text-2xl font-bold" data-testid="text-total-xp">{summary?.xp || 0}</p>
                  )}
                </div>
                <div className="p-2 rounded-full bg-blue-500/10">
                  <Zap className="h-5 w-5 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm text-muted-foreground">Level</p>
                  {summaryLoading ? (
                    <Skeleton className="h-8 w-12" />
                  ) : (
                    <p className="text-2xl font-bold" data-testid="text-level">{summary?.level || 1}</p>
                  )}
                </div>
                <div className="p-2 rounded-full bg-purple-500/10">
                  <Star className="h-5 w-5 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm text-muted-foreground">Referrals</p>
                  {summaryLoading ? (
                    <Skeleton className="h-8 w-12" />
                  ) : (
                    <p className="text-2xl font-bold" data-testid="text-referrals">{summary?.referrals || 0}</p>
                  )}
                </div>
                <div className="p-2 rounded-full bg-green-500/10">
                  <Users className="h-5 w-5 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-5 w-full max-w-2xl">
            <TabsTrigger value="overview" data-testid="tab-overview">Overview</TabsTrigger>
            <TabsTrigger value="missions" data-testid="tab-missions">Missions</TabsTrigger>
            <TabsTrigger value="referrals" data-testid="tab-referrals">Referrals</TabsTrigger>
            <TabsTrigger value="guild" data-testid="tab-guild">Guild</TabsTrigger>
            <TabsTrigger value="events" data-testid="tab-events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 p-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/20">
                      <Crown className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Founding Creator Guild</h3>
                      <p className="text-sm text-muted-foreground">Exclusive early creator program</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Join our exclusive guild of founding creators and unlock premium perks, AXM rewards, and early access to features.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Gift className="h-4 w-4 text-primary" />
                      <span>Weekly AXM token rewards</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-primary" />
                      <span>Exclusive badges & recognition</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span>Boosted content visibility</span>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => setActiveTab("guild")} data-testid="button-apply-guild">
                    Apply Now <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-500/20">
                      <Share2 className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Referral Program</h3>
                      <p className="text-sm text-muted-foreground">Earn rewards for inviting friends</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Share your unique referral link and earn AXM tokens when friends join and engage on Lumina.
                  </p>
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-lg mb-4">
                    <code className="text-sm flex-1 truncate">{referralLink}</code>
                    <Button size="icon" variant="ghost" onClick={copyReferralLink} data-testid="button-copy-referral">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 bg-muted/50 rounded-lg">
                      <p className="text-lg font-bold text-primary">50</p>
                      <p className="text-xs text-muted-foreground">AXM per signup</p>
                    </div>
                    <div className="p-2 bg-muted/50 rounded-lg">
                      <p className="text-lg font-bold text-primary">5%</p>
                      <p className="text-xs text-muted-foreground">tip revenue share</p>
                    </div>
                    <div className="p-2 bg-muted/50 rounded-lg">
                      <p className="text-lg font-bold text-primary">90</p>
                      <p className="text-xs text-muted-foreground">days active</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Active Missions
                </CardTitle>
                <CardDescription>Complete missions to earn XP and AXM rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <MissionCard 
                    title="First Post" 
                    description="Create your first post on Lumina" 
                    xp={25} 
                    axm="10" 
                    progress={0} 
                    target={1}
                    icon={<Zap className="h-4 w-4" />}
                    category="onboarding"
                  />
                  <MissionCard 
                    title="Follow 5 Creators" 
                    description="Discover and follow 5 creators you like" 
                    xp={50} 
                    axm="25" 
                    progress={0} 
                    target={5}
                    icon={<Users className="h-4 w-4" />}
                    category="social"
                  />
                  <MissionCard 
                    title="Daily Check-in" 
                    description="Visit Lumina every day to maintain your streak" 
                    xp={10} 
                    axm="5" 
                    progress={1} 
                    target={1}
                    icon={<Flame className="h-4 w-4" />}
                    category="daily"
                    isComplete
                  />
                </div>
                <Button variant="outline" className="w-full mt-4" onClick={() => setActiveTab("missions")} data-testid="button-view-all-missions">
                  View All Missions <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Upcoming Events
                </CardTitle>
                <CardDescription>Join community events to earn bonus rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <EventCard
                    title="Live Trading Tuesday"
                    description="Weekly market analysis with top traders"
                    date="Every Tuesday, 6 PM UTC"
                    type="trading_session"
                    attendees={42}
                    points={100}
                  />
                  <EventCard
                    title="Creator Spotlight"
                    description="Meet this week's featured creator"
                    date="Thursday, 7 PM UTC"
                    type="creator_spotlight"
                    attendees={28}
                    points={75}
                  />
                  <EventCard
                    title="DAO Town Hall"
                    description="Community governance discussion"
                    date="Saturday, 5 PM UTC"
                    type="town_hall"
                    attendees={156}
                    points={150}
                  />
                </div>
                <Button variant="outline" className="w-full mt-4" onClick={() => setActiveTab("events")} data-testid="button-view-all-events">
                  View All Events <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="missions" className="space-y-6">
            <MissionsTab />
          </TabsContent>

          <TabsContent value="referrals" className="space-y-6">
            <ReferralsTab referralCode={referralCode} referralLink={referralLink} onCopy={copyReferralLink} />
          </TabsContent>

          <TabsContent value="guild" className="space-y-6">
            <GuildTab />
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <EventsTab />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}

function MissionCard({ 
  title, 
  description, 
  xp, 
  axm, 
  progress, 
  target, 
  icon,
  category,
  isComplete = false
}: { 
  title: string; 
  description: string; 
  xp: number; 
  axm: string; 
  progress: number; 
  target: number;
  icon: React.ReactNode;
  category: string;
  isComplete?: boolean;
}) {
  const percentage = Math.min((progress / target) * 100, 100);
  
  const categoryColors: Record<string, string> = {
    onboarding: "bg-blue-500/10 text-blue-500",
    daily: "bg-orange-500/10 text-orange-500",
    weekly: "bg-purple-500/10 text-purple-500",
    social: "bg-green-500/10 text-green-500",
    content: "bg-pink-500/10 text-pink-500",
  };

  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg border ${isComplete ? "bg-primary/5 border-primary/20" : "bg-muted/50"}`}>
      <div className={`p-2 rounded-lg ${categoryColors[category] || "bg-muted"}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-medium">{title}</h4>
          {isComplete && <Badge variant="secondary" className="bg-green-500/10 text-green-500">Complete</Badge>}
        </div>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <Progress value={percentage} className="h-2" />
        <p className="text-xs text-muted-foreground mt-1">{progress}/{target}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-sm font-medium text-primary">+{xp} XP</p>
        <p className="text-xs text-muted-foreground">+{axm} AXM</p>
      </div>
    </div>
  );
}

function EventCard({
  title,
  description,
  date,
  type,
  attendees,
  points,
}: {
  title: string;
  description: string;
  date: string;
  type: string;
  attendees: number;
  points: number;
}) {
  const typeColors: Record<string, string> = {
    ama: "bg-blue-500/10 text-blue-500",
    trading_session: "bg-green-500/10 text-green-500",
    creator_spotlight: "bg-purple-500/10 text-purple-500",
    town_hall: "bg-orange-500/10 text-orange-500",
    workshop: "bg-pink-500/10 text-pink-500",
  };

  const typeLabels: Record<string, string> = {
    ama: "AMA",
    trading_session: "Trading",
    creator_spotlight: "Spotlight",
    town_hall: "Town Hall",
    workshop: "Workshop",
  };

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border bg-muted/50">
      <div className={`p-2 rounded-lg ${typeColors[type] || "bg-muted"}`}>
        <Calendar className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-medium">{title}</h4>
          <Badge variant="secondary" className={typeColors[type]}>
            {typeLabels[type] || type}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground mt-1">{date} · {attendees} attending</p>
      </div>
      <div className="text-right shrink-0">
        <Button size="sm" data-testid={`button-rsvp-${title.toLowerCase().replace(/\s+/g, '-')}`}>RSVP</Button>
        <p className="text-xs text-muted-foreground mt-1">+{points} pts</p>
      </div>
    </div>
  );
}

interface MissionData {
  id: string;
  title: string;
  description: string;
  type: string;
  category: string;
  xpReward: number;
  axmReward: string;
  targetValue: number;
  progress?: {
    currentProgress: number;
    isCompleted: boolean;
  } | null;
}

function MissionsTab() {
  const { data: missionsData, isLoading } = useQuery<{ missions: MissionData[] }>({
    queryKey: ["/api/growth/missions"],
  });

  const missions = missionsData?.missions || [];
  
  const onboardingMissions = missions.filter(m => m.category === "onboarding");
  const dailyMissions = missions.filter(m => m.type === "daily" || m.category === "daily");
  const weeklyMissions = missions.filter(m => m.type === "weekly" || m.category === "weekly");

  const getIconForCategory = (category: string) => {
    switch (category) {
      case "social": return <Users className="h-4 w-4" />;
      case "content": return <Zap className="h-4 w-4" />;
      case "engagement": return <Target className="h-4 w-4" />;
      default: return <Zap className="h-4 w-4" />;
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span>Loading missions...</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-500" />
            Onboarding Missions
          </CardTitle>
          <CardDescription>Complete these to get started on Lumina</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {onboardingMissions.length > 0 ? onboardingMissions.map((mission) => (
            <MissionCard 
              key={mission.id}
              title={mission.title} 
              description={mission.description} 
              xp={mission.xpReward} 
              axm={mission.axmReward} 
              progress={mission.progress?.currentProgress || 0} 
              target={mission.targetValue}
              icon={getIconForCategory(mission.category)}
              category={mission.category}
              isComplete={mission.progress?.isCompleted}
            />
          )) : (
            <>
              <MissionCard 
                title="Complete Your Profile" 
                description="Add an avatar, bio, and connect your wallet" 
                xp={50} 
                axm="25" 
                progress={0} 
                target={3}
                icon={<Users className="h-4 w-4" />}
                category="onboarding"
              />
              <MissionCard 
                title="First Post" 
                description="Share your first piece of content" 
                xp={25} 
                axm="10" 
                progress={0} 
                target={1}
                icon={<Zap className="h-4 w-4" />}
                category="onboarding"
              />
              <MissionCard 
                title="Make 5 Connections" 
                description="Follow 5 creators you find interesting" 
                xp={50} 
                axm="25" 
                progress={0} 
                target={5}
                icon={<Users className="h-4 w-4" />}
                category="onboarding"
              />
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            Daily Missions
          </CardTitle>
          <CardDescription>Reset every 24 hours</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <MissionCard 
            title="Daily Check-in" 
            description="Visit Lumina to maintain your streak" 
            xp={10} 
            axm="5" 
            progress={1} 
            target={1}
            icon={<Flame className="h-4 w-4" />}
            category="daily"
            isComplete
          />
          <MissionCard 
            title="Engage with Content" 
            description="Like or comment on 3 posts" 
            xp={15} 
            axm="10" 
            progress={1} 
            target={3}
            icon={<Target className="h-4 w-4" />}
            category="daily"
          />
          <MissionCard 
            title="Create Content" 
            description="Share a post, story, or video" 
            xp={20} 
            axm="15" 
            progress={0} 
            target={1}
            icon={<Zap className="h-4 w-4" />}
            category="daily"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-purple-500" />
            Weekly Missions
          </CardTitle>
          <CardDescription>Reset every Monday at 00:00 UTC</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <MissionCard 
            title="Content Creator" 
            description="Create 5 posts this week" 
            xp={100} 
            axm="50" 
            progress={1} 
            target={5}
            icon={<Zap className="h-4 w-4" />}
            category="weekly"
          />
          <MissionCard 
            title="Social Butterfly" 
            description="Engage with 20 posts this week" 
            xp={75} 
            axm="35" 
            progress={5} 
            target={20}
            icon={<Users className="h-4 w-4" />}
            category="weekly"
          />
          <MissionCard 
            title="Streak Master" 
            description="Maintain a 7-day streak" 
            xp={150} 
            axm="75" 
            progress={3} 
            target={7}
            icon={<Flame className="h-4 w-4" />}
            category="weekly"
          />
        </CardContent>
      </Card>
    </div>
  );
}

function ReferralsTab({ referralCode, referralLink, onCopy }: { referralCode: string; referralLink: string; onCopy: () => void }) {
  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-green-500/5 to-emerald-500/10 border-green-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share2 className="h-5 w-5 text-green-500" />
            Your Referral Link
          </CardTitle>
          <CardDescription>Share this link to earn rewards when friends join</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 p-4 bg-background rounded-lg border mb-4">
            <code className="text-sm flex-1 truncate">{referralLink}</code>
            <Button size="sm" onClick={onCopy} data-testid="button-copy-referral-main">
              <Copy className="h-4 w-4 mr-2" /> Copy
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="flex items-center gap-2" data-testid="button-share-twitter">
              <ExternalLink className="h-4 w-4" /> Twitter
            </Button>
            <Button variant="outline" className="flex items-center gap-2" data-testid="button-share-telegram">
              <ExternalLink className="h-4 w-4" /> Telegram
            </Button>
            <Button variant="outline" className="flex items-center gap-2" data-testid="button-share-discord">
              <ExternalLink className="h-4 w-4" /> Discord
            </Button>
            <Button variant="outline" className="flex items-center gap-2" data-testid="button-share-more">
              <Share2 className="h-4 w-4" /> More
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-1">0</div>
            <p className="text-sm text-muted-foreground">Total Referrals</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-500 mb-1">0 AXM</div>
            <p className="text-sm text-muted-foreground">Total Earnings</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Badge className="text-lg px-3 py-1 mb-2">Bronze</Badge>
            <p className="text-sm text-muted-foreground">Current Tier</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Referral Tiers</CardTitle>
          <CardDescription>Unlock higher rewards as you refer more users</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <ReferralTierCard tier="Bronze" referrals={0} requirement={0} reward="50 AXM" bonus="None" isActive />
            <ReferralTierCard tier="Silver" referrals={0} requirement={5} reward="75 AXM" bonus="+2% tip share" />
            <ReferralTierCard tier="Gold" referrals={0} requirement={25} reward="100 AXM" bonus="+5% tip share" />
            <ReferralTierCard tier="Platinum" referrals={0} requirement={100} reward="150 AXM" bonus="+8% tip share" />
            <ReferralTierCard tier="Diamond" referrals={0} requirement={500} reward="250 AXM" bonus="+10% tip share + exclusive badge" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Leaderboard</CardTitle>
          <CardDescription>Top referrers this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Trophy className="h-12 w-12 mx-auto mb-3 opacity-20" />
            <p>Be the first to climb the leaderboard!</p>
            <p className="text-sm">Start referring friends to earn your spot.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ReferralTierCard({ 
  tier, 
  referrals, 
  requirement, 
  reward, 
  bonus, 
  isActive = false 
}: { 
  tier: string; 
  referrals: number; 
  requirement: number; 
  reward: string; 
  bonus: string;
  isActive?: boolean;
}) {
  const tierColors: Record<string, string> = {
    Bronze: "from-amber-700 to-amber-600",
    Silver: "from-gray-400 to-gray-300",
    Gold: "from-yellow-500 to-yellow-400",
    Platinum: "from-purple-400 to-purple-300",
    Diamond: "from-cyan-400 to-cyan-300",
  };

  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg border ${isActive ? "border-primary bg-primary/5" : ""}`}>
      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${tierColors[tier]} flex items-center justify-center text-white font-bold`}>
        {tier[0]}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold">{tier}</h4>
          {isActive && <Badge variant="secondary" className="bg-primary/10 text-primary">Current</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{requirement} referrals required</p>
      </div>
      <div className="text-right">
        <p className="font-medium text-primary">{reward}</p>
        <p className="text-sm text-muted-foreground">{bonus}</p>
      </div>
    </div>
  );
}

interface GuildStatus {
  isMember: boolean;
  hasPendingApplication: boolean;
  member?: {
    tier: string;
    vestedAmount: string;
    claimedAmount: string;
    joinedAt: string;
  } | null;
  application?: {
    status: string;
    appliedAt: string;
  } | null;
}

function GuildTab() {
  const { toast } = useToast();
  const [isApplying, setIsApplying] = useState(false);
  const [applicationNote, setApplicationNote] = useState("");

  const { data: guildStatus, isLoading } = useQuery<GuildStatus>({
    queryKey: ["/api/growth/guild/status"],
  });

  const applyMutation = useMutation({
    mutationFn: (data: { referredBy?: string; note?: string }) =>
      apiRequest("POST", "/api/growth/guild/apply", data),
    onSuccess: () => {
      toast({
        title: "Application submitted!",
        description: "We'll review your application and get back to you soon.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/growth/guild/status"] });
      setIsApplying(false);
    },
    onError: () => {
      toast({
        title: "Application failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span>Loading guild status...</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const renderGuildHeader = () => {
    if (guildStatus?.isMember && guildStatus.member) {
      return (
        <Card className="bg-gradient-to-br from-amber-500/5 to-orange-500/10 border-amber-500/20 overflow-hidden">
          <div className="relative p-8 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
            <div className="relative">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 mb-4">
                <Crown className="h-12 w-12 text-amber-500" />
              </div>
              <Badge className="bg-amber-500/20 text-amber-500 mb-2">{guildStatus.member.tier} Member</Badge>
              <h2 className="text-2xl font-bold mb-2">Welcome to the Guild!</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-4">
                You're part of an exclusive community shaping the future of Lumina.
              </p>
              <div className="flex justify-center gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{guildStatus.member.vestedAmount}</p>
                  <p className="text-sm text-muted-foreground">AXM Vested</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-500">{guildStatus.member.claimedAmount}</p>
                  <p className="text-sm text-muted-foreground">AXM Claimed</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      );
    }

    if (guildStatus?.hasPendingApplication) {
      return (
        <Card className="bg-gradient-to-br from-amber-500/5 to-orange-500/10 border-amber-500/20 overflow-hidden">
          <div className="relative p-8 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
            <div className="relative">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 mb-4">
                <Crown className="h-12 w-12 text-amber-500" />
              </div>
              <Badge className="bg-yellow-500/20 text-yellow-500 mb-2">Application Pending</Badge>
              <h2 className="text-2xl font-bold mb-2">Application Submitted</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Your application is being reviewed. We'll notify you once a decision has been made.
              </p>
            </div>
          </div>
        </Card>
      );
    }

    return (
      <Card className="bg-gradient-to-br from-amber-500/5 to-orange-500/10 border-amber-500/20 overflow-hidden">
        <div className="relative p-8 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          <div className="relative">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 mb-4">
              <Crown className="h-12 w-12 text-amber-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Founding Creator Guild</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              An exclusive community of creators shaping the future of Lumina. Get early access, premium perks, and AXM rewards.
            </p>
            {isApplying ? (
              <div className="max-w-md mx-auto space-y-4">
                <textarea
                  className="w-full p-3 rounded-lg border bg-background text-foreground"
                  placeholder="Tell us about yourself and why you'd like to join..."
                  rows={4}
                  value={applicationNote}
                  onChange={(e) => setApplicationNote(e.target.value)}
                  data-testid="input-guild-application-note"
                />
                <div className="flex gap-2 justify-center">
                  <Button variant="outline" onClick={() => setIsApplying(false)}>Cancel</Button>
                  <Button 
                    onClick={() => applyMutation.mutate({ note: applicationNote })}
                    disabled={applyMutation.isPending}
                    data-testid="button-submit-guild-application"
                  >
                    {applyMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                    Submit Application
                  </Button>
                </div>
              </div>
            ) : (
              <Button size="lg" onClick={() => setIsApplying(true)} data-testid="button-apply-guild-main">
                <Crown className="h-5 w-5 mr-2" /> Apply to Join
              </Button>
            )}
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      {renderGuildHeader()}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-3">
              <Gift className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Weekly Rewards</h3>
            <p className="text-sm text-muted-foreground">Earn AXM tokens every week based on your contributions</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="p-3 rounded-full bg-purple-500/10 w-fit mx-auto mb-3">
              <Award className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="font-semibold mb-1">Exclusive Badges</h3>
            <p className="text-sm text-muted-foreground">Stand out with unique NFT badges on your profile</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="p-3 rounded-full bg-green-500/10 w-fit mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="font-semibold mb-1">Content Boost</h3>
            <p className="text-sm text-muted-foreground">Get priority placement in feeds and recommendations</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="p-3 rounded-full bg-blue-500/10 w-fit mx-auto mb-3">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="font-semibold mb-1">Weekly Syncs</h3>
            <p className="text-sm text-muted-foreground">Join exclusive calls with the Lumina team</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Guild Tiers</CardTitle>
          <CardDescription>Progress through tiers to unlock more perks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <GuildTierCard
              tier="Rising"
              description="New guild members"
              weeklyAxm="50"
              perks={["Basic badge", "Weekly digest", "Community access"]}
            />
            <GuildTierCard
              tier="Creator"
              description="Active contributors"
              weeklyAxm="100"
              perks={["Creator badge", "Content boost", "Priority support"]}
            />
            <GuildTierCard
              tier="Pioneer"
              description="Top performers"
              weeklyAxm="250"
              perks={["Pioneer badge", "Featured placement", "Beta access"]}
            />
            <GuildTierCard
              tier="Founding"
              description="Elite members"
              weeklyAxm="500"
              perks={["Founding badge", "Governance power", "Revenue share"]}
              isHighlighted
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function GuildTierCard({ 
  tier, 
  description, 
  weeklyAxm, 
  perks,
  isHighlighted = false
}: { 
  tier: string; 
  description: string; 
  weeklyAxm: string; 
  perks: string[];
  isHighlighted?: boolean;
}) {
  return (
    <div className={`p-4 rounded-lg border ${isHighlighted ? "border-primary bg-primary/5" : "bg-muted/50"}`}>
      <div className="text-center mb-4">
        <h4 className="font-semibold text-lg">{tier}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-primary">{weeklyAxm}</p>
        <p className="text-sm text-muted-foreground">AXM / week</p>
      </div>
      <ul className="space-y-2">
        {perks.map((perk, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <Star className="h-3 w-3 text-primary shrink-0" />
            <span>{perk}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface EventData {
  id: string;
  title: string;
  description: string;
  type: string;
  scheduledStart: string;
  rsvpCount: number;
  pointsReward: number;
  status: string;
  userRsvp?: {
    status: string;
  } | null;
}

function EventsTab() {
  const { toast } = useToast();
  
  const { data: eventsData, isLoading } = useQuery<{ events: EventData[] }>({
    queryKey: ["/api/growth/events"],
  });

  const rsvpMutation = useMutation({
    mutationFn: ({ eventId, setReminder }: { eventId: string; setReminder: boolean }) =>
      apiRequest("POST", `/api/growth/events/${eventId}/rsvp`, { setReminder }),
    onSuccess: () => {
      toast({
        title: "RSVP confirmed!",
        description: "You'll be reminded before the event starts.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/growth/events"] });
    },
    onError: () => {
      toast({
        title: "RSVP failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const events = eventsData?.events || [];
  const upcomingEvents = events.filter(e => e.status === "scheduled" || e.status === "live");
  const pastEvents = events.filter(e => e.status === "completed");

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span>Loading events...</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-green-500/5 to-emerald-500/10 border-green-500/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/20">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Live Trading Tuesday</p>
                <p className="font-medium">Every Tuesday, 6 PM UTC</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500/5 to-violet-500/10 border-purple-500/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Star className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Creator Spotlight</p>
                <p className="font-medium">Every Thursday, 7 PM UTC</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500/5 to-amber-500/10 border-orange-500/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/20">
                <Users className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">DAO Town Hall</p>
                <p className="font-medium">Weekend, 5 PM UTC</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Join events to earn bonus points and AXM</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingEvents.length > 0 ? upcomingEvents.map((event) => (
            <div key={event.id} className="flex items-center gap-4 p-4 rounded-lg border bg-muted/50">
              <div className="p-2 rounded-lg bg-primary/10">
                <Calendar className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h4 className="font-medium">{event.title}</h4>
                  <Badge variant="secondary">{event.type.replace(/_/g, " ")}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{event.description}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {formatDate(event.scheduledStart)} · {event.rsvpCount} attending
                </p>
              </div>
              <div className="text-right shrink-0">
                {event.userRsvp ? (
                  <Badge variant="secondary" className="bg-green-500/10 text-green-500">RSVP'd</Badge>
                ) : (
                  <Button 
                    size="sm" 
                    onClick={() => rsvpMutation.mutate({ eventId: event.id, setReminder: true })}
                    disabled={rsvpMutation.isPending}
                    data-testid={`button-rsvp-${event.id}`}
                  >
                    {rsvpMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "RSVP"}
                  </Button>
                )}
                <p className="text-xs text-muted-foreground mt-1">+{event.pointsReward} pts</p>
              </div>
            </div>
          )) : (
            <>
              <EventCard
                title="Live Trading Tuesday"
                description="Weekly market analysis and trading strategies with top traders"
                date="Tuesday, Dec 10, 6:00 PM UTC"
                type="trading_session"
                attendees={42}
                points={100}
              />
              <EventCard
                title="Creator Spotlight"
                description="Meet this week's featured creator and learn their content strategies"
                date="Thursday, Dec 12, 7:00 PM UTC"
                type="creator_spotlight"
                attendees={28}
                points={75}
              />
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Past Events</CardTitle>
          <CardDescription>Watch recordings from previous events</CardDescription>
        </CardHeader>
        <CardContent>
          {pastEvents.length > 0 ? (
            <div className="space-y-4">
              {pastEvents.map((event) => (
                <div key={event.id} className="flex items-center gap-4 p-4 rounded-lg border">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <h4 className="font-medium">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">{formatDate(event.scheduledStart)}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-1" /> Recording
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Calendar className="h-12 w-12 mx-auto mb-3 opacity-20" />
              <p>No past events yet</p>
              <p className="text-sm">Recordings will appear here after events conclude.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
