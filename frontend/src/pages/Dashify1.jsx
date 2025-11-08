/*import { useEffect, useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardDescription,
} from "@/components/ui/card";
import '../index.css';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import {
  LayoutDashboard, Github, Sparkles, Users2,
  LineChart, Settings, LogOut
} from "lucide-react";

const getGithubUsername = (url) => {
  if (!url) return null;
  try {
    const clean = url.replace(/^https?:\/\//, "").replace(/\/+$/, "");
    const after = clean.split("github.com/")[1] || clean;
    return after.split("/")[0].trim();
  } catch {
    return null;
  }
};

function useGithubProfile(username) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    if (!username) return;
    fetch(`https://api.github.com/users/${username}`)
      .then((r) => r.json())
      .then((d) => { if (!ignore) setData(d); });
    return () => { ignore = true; };
  }, [username]);
  return data;
}



const GlassCard = ({ children, className = "" }) => (
  <Card className={`bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg rounded-2xl ${className}`}>
    {children}
  </Card>
);

const Row = ({ k, v }) => (
  <div className="flex items-center justify-between gap-4">
    <span className="text-white/70">{k}</span>
    <span className="text-white font-medium truncate">{v}</span>
  </div>
);

const Stat = ({ label, value }) => (
  <div className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
    <div className="text-xl font-bold">{value}</div>
    <div className="text-xs text-white/60">{label}</div>
  </div>
);

export default function DashboardPremium() {
  const nav = useNavigate();
  const [user, setUser] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const s = localStorage.getItem("jiit_session");
    const d = localStorage.getItem("userDetails");
    if (!s) return nav("/");
    setUser(JSON.parse(s));
    if (d) setDetails(JSON.parse(d));
  }, []);

  const githubUsername = useMemo(
    () => getGithubUsername(details?.githubProfile),
    [details?.githubProfile]
  );

  const gh = useGithubProfile(githubUsername);

  if (!user || !details) return null;

  const skillArray = details.skills
    ? details.skills.split(",").map((s) => s.trim()).filter(Boolean)
    : [];

  const skillStats = skillArray.map((s) => ({
    skill: s,
    value: Math.floor(Math.random() * 60) + 40,
  }));

  const COLORS = ["#22d3ee", "#a78bfa", "#34d399", "#f59e0b", "#ef4444", "#60a5fa"];

  const weeklyActivity = [
    { day: "Mon", commits: 2 },
    { day: "Tue", commits: 5 },
    { day: "Wed", commits: 3 },
    { day: "Thu", commits: 8 },
    { day: "Fri", commits: 4 },
    { day: "Sat", commits: 6 },
    { day: "Sun", commits: 1 },
  ];

  return (
    <div className="w-full flex h-screen bg-gradient-to-b from-black via-black to-gray-900 text-pink">
      <div className="bg-blue-500 text-white px-4 py-2 rounded shadow-md !important">
  <Menubar className="flex space-x-2 min-w-200">
  <MenubarMenu className="px-4 bg-blue-500">
    <MenubarTrigger>Github Analysis</MenubarTrigger>
    <MenubarContent>
    <MenubarItem>New Window</MenubarItem>
    <MenubarSeparator />
    <MenubarItem>Open</MenubarItem>
    <MenubarSeparator />
    <MenubarItem>Save</MenubarItem>
    </MenubarContent>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>Skills</MenubarTrigger>
    <MenubarContent>
    <MenubarItem>Undo</MenubarItem>
    <MenubarSeparator />
    <MenubarItem>Redo</MenubarItem>
    </MenubarContent>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>Score</MenubarTrigger>
    <MenubarContent>
    <MenubarItem>Email</MenubarItem>
    <MenubarItem>Link</MenubarItem>
    </MenubarContent>
  </MenubarMenu>

<MenubarMenu>
    <MenubarTrigger>Settings</MenubarTrigger>
    <MenubarContent>
    <MenubarItem>Email</MenubarItem>
    <MenubarItem>Link</MenubarItem>
    </MenubarContent>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>Teams</MenubarTrigger>
    <MenubarContent>
    <MenubarItem>New File</MenubarItem>
    <MenubarItem>New Window</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>


</div>

            <div className="mt-auto">
              <Button
                variant="destructive"
                className="w-full"
                onClick={() => { localStorage.removeItem("jiit_session"); nav("/"); }}
              >
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </div>
          

          <main className="flex-1 min-w-0">

            <div className="flex items-center justify-between px-6 py-5
              border-b border-white/10 bg-black/20 backdrop-blur">

              <div>
                <motion.h1
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-extrabold tracking-tight"
                >
                  Welcome, {user.name} 👋
                </motion.h1>
                <p className="text-white/60">
                  Analytics Panel • Institute: {user.instituteid} • Roll: {user.enrollmentno}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={gh?.avatar_url}
                  className="h-12 w-12 rounded-full border border-white/20 shadow"
                />
                <div className="text-right">
                  <div className="font-semibold">{githubUsername}</div>
                  <div className="text-xs text-white/60">{gh?.followers ?? 0} followers</div>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <GlassCard>
                  <CardHeader>
                    <CardTitle>👤 Profile Summary</CardTitle>
                    <CardDescription className="text-white/70">Your hackathon identity</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Row k="Email" v={details.personalEmail} />
                    <Row k="Skills" v={details.skills} />
                    <Row k="GitHub" v={<a className="underline" href={details.githubProfile} target="_blank">{details.githubProfile}</a>} />

                    {gh && (
                      <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                        <Stat label="Repos" value={gh.public_repos} />
                        <Stat label="Followers" value={gh.followers} />
                        <Stat label="Following" value={gh.following} />
                      </div>
                    )}
                  </CardContent>
                </GlassCard>

                <GlassCard className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>📊 Skill Strength</CardTitle>
                  </CardHeader>
                  <CardContent style={{ height: 260 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={skillStats}>
                        <XAxis dataKey="skill" stroke="#aaa" />
                        <YAxis stroke="#aaa" />
                        <Tooltip />
                        <Bar dataKey="value" fill="#60a5fa" radius={8} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </GlassCard>

                <GlassCard>
                  <CardHeader>
                    <CardTitle>🧠 Skill Distribution</CardTitle>
                  </CardHeader>
                  <CardContent style={{ height: 250 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={skillStats}
                          dataKey="value"
                          nameKey="skill"
                          innerRadius={50}
                          outerRadius={90}
                        >
                          {skillStats.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </GlassCard>

                <GlassCard className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>🔥 Weekly Coding Activity</CardTitle>
                  </CardHeader>
                  <CardContent style={{ height: 250 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={weeklyActivity}>
                        <XAxis dataKey="day" stroke="#aaa" />
                        <YAxis stroke="#aaa" />
                        <Tooltip />
                        <Bar dataKey="commits" fill="#22d3ee" radius={10} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </GlassCard>

                <GlassCard>
                  <CardHeader>
                    <CardTitle>🧩 Team Builder</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" onClick={() => nav("/team")}>Generate Team</Button>
                  </CardContent>
                </GlassCard>

                <GlassCard>
                  <CardHeader>
                    <CardTitle>📈 Candidate Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" onClick={() => nav("/score")}>View Score</Button>
                  </CardContent>
                </GlassCard>

              </div>
            </div>
          </main>
        </div>
  );
}
*/