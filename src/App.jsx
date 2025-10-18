import React from 'react'
import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import banner from '/assets/banner.png'

export default function App(){
  const skills = [
    {name:'Cybersecurity', level:90},
    {name:'Cloud & Identity', level:85},
    {name:'Networking', level:80},
    {name:'Infrastructure', level:88},
    {name:'Incident Response', level:75},
  ]
  const timeline = [
    {year:'2013–2014', title:'System Engineer', place:'Infosys Ltd', detail:'Supported Daimler Data Centre ensuring 24/7 uptime.'},
    {year:'2015–2020', title:'IT Coordinator', place:'KPFF Global', detail:'Managed AD, Exchange & network with 99.9% uptime.'},
    {year:'2021–2022', title:'Technical Support Engineer', place:'Expo 2020 Dubai', detail:'Ensured secure operations; zero breaches during event.'},
    {year:'2022–Present', title:'IT Support Specialist', place:'ENOC', detail:'Managed Entra ID & collaborated with SOC for threat response.'},
  ]
  const missions = [
    {title:'Threat Detection Mission', desc:'Analyzed phishing incidents and risk alerts with SOC.', status:'Completed'},
    {title:'Secure Infrastructure Quest', desc:'Configured MFA and Conditional Access for 3,500+ users.', status:'Completed'},
    {title:'CEH Training Expedition', desc:'Hands-on labs in Nmap, Burp Suite, Metasploit, Nessus.', status:'In Progress'},
  ]
  const leaderboard = [
    {badge:'🥇', title:'Microsoft SC-300 Identity & Access', score:95},
    {badge:'🥈', title:'ISC² Certified in Cybersecurity (CC)', score:92},
    {badge:'🥉', title:'CCNA – Cisco Certified Network Associate', score:89},
  ]

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-black">
      <header className="max-w-4xl mx-auto text-center mb-6">
        <img src={banner} alt="Cybersecurity Quest banner" className="mx-auto mb-4 w-full max-w-2xl rounded-lg shadow-lg"/>
        <motion.h1 initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold text-cyan-400">🎮 Cybersecurity Quest</motion.h1>
        <p className="text-gray-300 mt-2">Farhan Mohammed Fathah — IT Guardian → Cyber Defender → Ethical Hacker</p>
      </header>

      <main className="max-w-6xl mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <section className="sm:col-span-2 lg:col-span-1 space-y-4">
          <motion.div whileHover={{scale:1.02}} className="bg-gray-800/70 rounded-xl p-4 border border-cyan-500/30">
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">🧭 Career Timeline</h2>
            <div className="border-l-2 border-cyan-400 pl-4 space-y-4">
              {timeline.map((t,i)=>(
                <div key={i} className="relative">
                  <div className="absolute -left-2 top-2 w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <p className="text-sm text-gray-300 font-semibold">{t.year} — {t.title}</p>
                  <p className="text-xs text-gray-400">{t.place}</p>
                  <p className="text-sm text-gray-300 mt-1">{t.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div whileHover={{scale:1.02}} className="bg-gray-800/70 rounded-xl p-4 border border-cyan-500/30">
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">🚀 Mission Log</h2>
            <div className="space-y-3">
              {missions.map((m,i)=>(
                <div key={i} className="p-3 rounded-md border border-cyan-400/20 hover:bg-cyan-400/6">
                  <p className="font-semibold text-cyan-200">{m.title}</p>
                  <p className="text-sm text-gray-300 mt-1">{m.desc}</p>
                  <p className={"mt-1 text-xs font-bold "+(m.status==='Completed'?'text-green-400':'text-yellow-400')}>Status: {m.status}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="space-y-4">
          <motion.div whileHover={{scale:1.02}} className="bg-gray-800/70 rounded-xl p-4 border border-cyan-500/30">
            <h2 className="text-xl font-semibold text-cyan-300 mb-3">🧠 Skill XP Progress</h2>
            <div className="space-y-3">
              {skills.map((s,i)=>(
                <div key={i}>
                  <div className="flex justify-between text-sm text-gray-300"><span>{s.name}</span><span>{s.level}%</span></div>
                  <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                    <motion.div initial={{width:0}} animate={{width:`${s.level}%`}} transition={{duration:1, delay:i*0.15}} className="h-full bg-cyan-400"/>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div whileHover={{scale:1.02}} className="bg-gray-800/70 rounded-xl p-4 border border-cyan-500/30">
            <h2 className="text-xl font-semibold text-cyan-300 mb-3">🏅 Leaderboard</h2>
            <div className="space-y-3">
              {leaderboard.map((l,i)=>(
                <div key={i} className="flex items-center justify-between p-3 border border-cyan-400/10 rounded-md hover:bg-cyan-400/6">
                  <div>
                    <p className="font-semibold text-cyan-200">{l.badge} {l.title}</p>
                    <p className="text-xs text-gray-400">Certification / Achievement</p>
                  </div>
                  <span className="text-sm text-gray-300">Score: {l.score}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="max-w-4xl mx-auto text-center mt-10 pb-6 border-t border-gray-800 pt-6 text-gray-300">
        <p>📧 farhanfathah@gmail.com | 📞 +971 55 557 2142</p>
        <p className="text-xs text-gray-500 mt-2">Deploy with GitHub Pages — see README for instructions.</p>
      </footer>
    </div>
  )
}
