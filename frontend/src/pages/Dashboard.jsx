import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
import React, { useEffect, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import "./login.css";
export default function Dashboard() {
    const [jiitDetails, setJiitDetails] = useState(null);
    const [filledDetails, setFilledDetails] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(null);
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("jiit_session"));
        const details = JSON.parse(localStorage.getItem("userDetails"));
        if (stored) {
            console.log("stored", stored);
            setJiitDetails(stored);
        }
        setFilledDetails(details);
        console.log(details);
    }, []);
    useEffect(() => {
        const fetchGitHubAvatar = async () => {
            if (!filledDetails?.githubProfile) return;

            try {
                const username = filledDetails.githubProfile.split("github.com/")[1];
                const res = await fetch(`https://api.github.com/users/${username}`);
                const data = await res.json();

                console.log("GitHub API:", data);
                setAvatarUrl(data.avatar_url);
            } catch (err) {
                console.error("GitHub fetch error:", err);
            }
        };

        fetchGitHubAvatar();
    }, [filledDetails]);
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <div style={{ width: "100vw", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", alignItems: "center", display: "flex", justifyContent: "center", backgroundColor: "#d01717ff" }}>
                <Menubar style={{ backgroundColor: "#1d1c1cff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", display: "flex", alignItems: "center", gap: "2px", width: "fit-content", justifyContent: "center", margin: "10px", padding: "5px", borderRadius: "8px" }}>
                    <MenubarMenu>
                        <MenubarTrigger>GitHub Analysis</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Skills</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Score</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Projects</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Resume</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Certificates</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Enrolled in teams</MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", textAlign: "center" }}>
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                    {jiitDetails ? (
                        <p>Welcome {jiitDetails.name} to the dashboard page!</p>
                    ) : (
                        <p>Welcome ...</p>
                    )}
                    {avatarUrl && (

                        <AspectRatio ratio={16 / 9}>
                            <img
                                src={avatarUrl}
                                alt="GitHub Avatar"
                                style={{ height: "80%", borderRadius: "50%" }} onClick={() => window.open(filledDetails.githubProfile, "_blank")} />
                        </AspectRatio>
                    )}<div>
                    <div className="flex h-5 items-center space-x-4 text-sm" style={{display:"flex", alignItems:"center", alignContent:"center", gap:"5px", fontSize:"medium",justifyContent:"center"}}>
                        <div>repos</div>
                        <Separator className="vertical" />
                        <div>follower</div>
                        <Separator className="vertical" />
                        <div>following</div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
}