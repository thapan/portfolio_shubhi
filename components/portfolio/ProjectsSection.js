import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from './ProjectCard';

const fireTvImage = new URL('../../assets/fire-tv-stick-4k.png', import.meta.url).href;

const qualcommProjects = [

  /*
  -------------------------------------------------------------------
  1. Wireless Debug & RF Analysis
  -------------------------------------------------------------------
  */

  {
    title: "Wireless Debug & RF Analysis",
    role: "Role: RF validation & packet analysis lead",
    summary:
      "Built controlled RF environments and packet-level debugging workflows to diagnose roaming, RVR, and sensitivity issues across Wi-Fi platforms.",
    
    tech: ["WLAN", "RF", "RVR", "802.11", "Sniffer", "Debugging"],

    problem:
      "Roaming failures and RF sensitivity issues were difficult to reproduce due to inconsistent open-air conditions and limited packet-level visibility.",

    solution:
      "Designed controlled RF chambers with programmable attenuators for accurate RVR sweeps and standardized sniffer capture/playback with automated packet analysis scripts.",

    impact:
      "Achieved 99% reproducibility, identified 25+ RF regressions early, and reduced triage time from 2 days to 4 hours.",

    hasDemo: true,

    details: [
      {
        title: "Wi-Fi Dual-Client Sanity Testbed",
        description:
          "Owned multiple dual-client open-air testbeds validating wireless modes, security, and throughput across Qualcomm Wi-Fi platforms.",
        demoType: "dual-client"
      },
      {
        title: "RF Environment & RVR Testing",
        description:
          "Built shield-box based setups with attenuators for precise RVR/throughput validation across 2.4/5 GHz bands.",
        demoType: "rvr-test"
      },
      {
        title: "Sniffer & Packet Analysis Automation",
        description:
          "Script-driven packet capture, filtering, and correlation to debug roaming and handoff defects rapidly.",
        demoType: "sniffer-analysis"
      }
    ]
  },

  /*
  -------------------------------------------------------------------
  2. Automation & ML-Driven Test Prioritization
  -------------------------------------------------------------------
  */

  {
    title: "Automation & ML-Driven Test Prioritization",
    role: "Role: Automation + ML framework developer",
    summary:
      "Accelerated regression cycles by combining ML-based test ranking with expanded WLAN sanity automation.",
    
    tech: ["ML", "Python", "Perl", "Automation", "WLAN"],

    problem:
      "Full regression cycles across thousands of tests slowed down detection of crash-heavy issues and consumed excessive engineering time.",

    solution:
      "Developed supervised ML ranking using crash history + code deltas; enhanced Perl WLAN sanity automation with intelligent retries and stability/throughput coverage.",

    impact:
      "Caught 85% of crash issues in the first 20% of executions and reduced total cycle time by 60% while tripling effective coverage.",

    hasDemo: true,

    details: [
      {
        title: "ML-Driven Test Ranking",
        description:
          "Supervised model predicting crash-prone tests using historical data and code change patterns.",
        demoType: "ml-prioritization"
      },
      {
        title: "WLAN Sanity Automation",
        description:
          "Built Perl automation for throughput/stability sanity with retries and structured reporting across multiple Wi-Fi platforms."
      }
    ]
  },

  /*
  -------------------------------------------------------------------
  3. Customer-Grade Stress & Reliability Testing
  -------------------------------------------------------------------
  */

  {
    title: "Customer-Grade Stress & Reliability Testing",
    role: "Role: Stress lab & reliability testing owner",
    summary:
      "Ran large-scale device farms and voice/Wi-Fi stress scenarios to mirror real customer environments and expose long-duration reliability issues.",
    
    tech: ["Automation", "WLAN", "Voice", "SNS", "Power Line", "PLC"],

    problem:
      "Customer-like loads and voice interactions exposed issues that standard functional or regression suites failed to detect early.",

    solution:
      "Built a 150+ device stress lab with automated cycles; layered Alexa-style voice/Wi-Fi scenarios; added PLC throughput validation under varied noise.",

    impact:
      "Delivered 99.9% lab uptime, 99.5% voice reliability, and uncovered 40+ critical regressions before production.",

    hasDemo: true,
   
    details: [
      {
        title: "Max-Client Stress Environment",
        description:
          "150+ device orchestrated lab performing automated connect/disconnect cycles, throughput sweeps, and long-duration stability checks.",
         demoType: "stress-test",
      },
      {
        title: "Alexa-Grade Wi-Fi Stress Testing",
        description:
          "Low-latency voice command loops under congestion/interference to validate real-world responsiveness.",
      },
      {
        title: "Power Line Communication (PLC) Testing",
        description:
          "Throughput/stability validation over PLC links with noise simulation and long-duration monitoring.",
      }
    ]
  },

  /*
  -------------------------------------------------------------------
  4. Platform Bring-up & Launch Leadership
  -------------------------------------------------------------------
  */

  {
    title: "Platform Bring-up & Launch Leadership",
    role: "Role: Sanity/bring-up lead & release execution owner",
    summary:
      "Led daily sanity, chipset bring-up, and release execution across Qualcomm Wi-Fi 5 and Wi-Fi 6 platforms, ensuring stable builds for downstream teams.",
    
    tech: [
      "Sanity Validation",
      "Daily Build Verification",
      "Regression Testing",
      "WLAN",
      "Wi-Fi 5 (11ac)",
      "Wi-Fi 6 (11ax)",
      "Chipset Bring-up",
      "Release Management",
      "Cross-Functional Coordination"
    ],

    problem:
      "Daily builds across Wi-Fi platforms often arrived unstable, delaying functional teams and causing unpredictable test cycles due to fragmented early validation.",

    solution:
      "Established consistent sanity validation workflows with automated checks, standardized regression cycles, clear bug bars, and cross-team quality gates. Led daily triage and ensured stable, test-ready builds went to all downstream teams.",

    impact:
      "Significantly reduced build blockers, improved stability, accelerated functional team productivity, and delivered multiple chipset releases with zero critical escapes.",

    details: [
      {
        title: "Wi-Fi 5 (11ac) — Sanity & Regression Leadership",
        description:
          "Owned daily sanity cycles; unified planning; automated critical flows; ensured stable weekly drops for functional teams."
      },
      {
        title: "Wi-Fi 6 (11ax) — Platform Bring-up Execution",
        description:
          "Drove end-to-end bring-up and release workflows: validation strategy, automation, bug bar ownership, and readiness gates."
      }
    ]
  }
];

const amazonProjects = [
  {
    title: "Launch Leadership & Connectivity Ownership",
    period: "2018-2025",
    summary: "Connectivity launch owner across Fire TV sticks/cubes—Wi-Fi/BT/BLE/CoEx quality, OOBE/FFS, Live TV, and readiness gates.",
    tech: ["Wi-Fi", "BT", "BLE", "CoEx", "FFS", "Live TV", "Automation", "SNS"],
    problem: "Connectivity regressions and Live TV/OOBE risks threatened on-time launches and customer experience.",
    solution: "Daily triage and sign-offs on Wi-Fi/BT/BLE/CoEx, Live TV validation, stability testbeds, and launch gates across generations.",
    impact: "Zero critical launch escapes across 5 device launches with higher Live TV setup success and stable KPIs.",
    link: "https://www.amazon.com/dp/B08XVYZ1Y5/ref=tsm_1_fb_lk?th=1",
    imageUrl: fireTvImage,
    hasDemo: true,
    details: [
      {
        title: "Fire TV launches: connectivity owner",
        description: "Connectivity lead for sticks/cubes—regressions, OOBE/FFS readiness, Live TV validation with Frank/Dektec.",
        tech: ["Wi-Fi", "BT", "BLE", "CoEx", "FFS", "Live TV"],
      },
      {
        title: "Device Launch Ownership",
        description: "Launch readiness and validation gates across 5 device generations; zero critical escapes.",
        tech: ["Automation", "Sanity", "WLAN", "SNS"],
      },
      {
        title: "Wi-Fi Stability Testbeds",
        description: "Long-run Wi-Fi stability labs simulating home routers/interference to prevent field issues (60% reduction).",
        tech: ["WLAN", "Automation", "SNS", "RF"],
      }
    ]
  },
  {
    title: "Automation & Tooling for Connectivity",
    period: "2018-2023",
    summary: "Built automation stack for remotes/routers, cloud OTA testing, and Jira MMS integration.",
    tech: ["Automation", "Arduino", "Routers", "AWS", "Python", "CLI", "Jira"],
    problem: "Manual router changes, remote latency checks, and defect logging slowed sign-offs and added risk.",
    solution: "Arduino latency rig + router UI scripting, cloud-native OTA CLI workflows, and automated Jira MMS plugin.",
    impact: "Release gating on latency KPIs, 10x OTA scale at 40% lower cost, and 95% defect accuracy with 15+ hrs/week saved.",
    hasDemo: true,
    demoType: "remote-router",
    details: [
      {
        title: "Automation: remotes & routers",
        description: "Arduino remote-latency rig and scripted router UI (TP-Link, Netgear) for rapid topology spins.",
        tech: ["Automation", "Arduino", "Routers"],
        demoType: "remote-router",
      },
      {
        title: "OTA CLI Tool",
        description: "Migrated OTA testing to AWS with CLI-driven provisioning and execution for scale/cost wins.",
        tech: ["AWS", "Python", "Automation", "CLI"],
        demoType: "ota-migration",
      },
      {
        title: "Auto Jira MMS Plugin",
        description: "Auto-create/update Jira tickets from MMS/test results for accurate, low-latency defect tracking.",
        tech: ["Jira", "Python", "Automation", "AWS"],
        demoType: "jira-mms",
      }
    ],
  },
  {
    title: "RF Lab Ops & Booking",
    period: "2018-2019",
    summary: "RF lab stewardship with RVR/perf/stress setups and a booking tool to keep runs conflict-free.",
    tech: ["RF", "RVR", "Perf", "Stress", "Scheduling"],
    problem: "Shared labs caused conflicts and inconsistent environments for reproducible connectivity testing.",
    solution: "Maintained shield rooms/RF boxes, calibrated rigs, and built a booking tool with conflict checks.",
    impact: "Higher lab throughput and reproducible runs.",
    hasDemo: true,
    demoType: "lab-ops",
    listStyle: "ordered",
  }
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("amazon");

  const projects = activeTab === "amazon" ? amazonProjects : qualcommProjects;

  return (
    <section id="projects" className="py-32 px-6 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-2">
            Click on any project to explore the full story
          </p>
          <p className="text-emerald-400 text-sm">
            ✨ Projects with "Interactive Demo" badges include live visualizations
          </p>

          <div className="mt-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="inline-flex">
              <TabsList className="bg-gray-800/50 border border-gray-700/50 p-1">
                <TabsTrigger
                  value="amazon"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6 py-2"
                >
                  Amazon (2018-Present)
                </TabsTrigger>
                <TabsTrigger
                  value="qualcomm"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white px-6 py-2"
                >
                  Qualcomm (2015-2018)
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
