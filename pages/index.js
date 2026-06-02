import { useState } from "react";

const C = {
  cream:"#FAF7F4", blush:"#EDD5CC", rose:"#C4847A", deeprose:"#9E5C54",
  charcoal:"#2A2523", gold:"#B5924C", mist:"#EDE9E5", mid:"#9A8F8A",
  white:"#FFFFFF", green:"#D4EDDA", greenText:"#155724",
};

const SHEET_ID = "1eq0UmIsV1Ddsvcdcxhw_wU3EePVBBDhv4tjN7G_LF8w";
const GOOGLE_API_KEY = "YOUR_GOOGLE_API_KEY";
const SHEET_NAME = "Sheet1";

// ─── SYSTEM PROMPT ────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are the communications assistant for Sarah Darby — Australia's premier live fashion illustrator. Sarah has worked with Cartier, Valentino, Fendi, Ferrari, Rolls-Royce, Sofitel, Moët et Chandon, and has illustrated for the Qatari royal family. She holds a commendation for Best Live Event Artist at the global FIDA fashion illustration awards. Overflow bookings are referred to Emma Leonard, who illustrates exclusively under the Sarah Darby Illustrations umbrella.

BRAND VOICE: Warm confidence. Quietly prestigious. Never apologetic, never eager-to-please. No filler phrases, no emoji in emails. Warmth comes from genuine writing. Short, elegant sentences.

SERVICES & PRICING:
- WEDDINGS: 5hr $1,900+GST (50 guests), 6hr $2,350+GST (60 guests), up to Platinum $4,500+GST. Add-ons $30/person. All include: A5 sketches, luxury envelope + backing card, custom template, couple sketch, all materials, artist dressed to dress code, event reel.
- HORSE RACES: Custom race day activation packages.
- CORPORATE EVENTS: Custom packages, pricing on application.
- LUXURY RETAIL in-store: Brand activation packages.
- LUXURY HOTELS: Seasonal and ongoing activation packages.
- EMMA LEONARD: Referred when Sarah unavailable. Same quality and pricing.

TEMPLATE LIBRARY:

TEMPLATE 1 — FIRST WEDDING REPLY (Sarah available)
Subject: Live Illustration for Your [DATE] Wedding — Sarah Darby
Hi [NAME],
Thank you for reaching out — what a beautiful occasion to be considered for.
Sarah has illustrated at hundreds of weddings across Australia, and her live sketches have become one of the most talked-about moments at every event she attends. Guests queue up, couples frame them, and many tell us it's the gift people remember long after the day.
For a wedding of your size, our most popular option is the 5-hour package:
• 50 A5 guest sketches, live on the night
• Luxury white envelope and backing card for each sketch
• Custom template design — names, date, florals, whatever reflects your day
• A complimentary couple's sketch at the start of the evening
• All art materials, and Sarah dressed to your event's dress code
• A reel of your evening
Investment: $1,900 + GST
Additional group sketches — bridesmaids, family — can be arranged at $30 per person, confirmed in the lead-up. Our full package range is attached for you to explore.
Sarah's [YEAR] calendar is filling steadily, so if you'd like to hold your date, a $500 deposit secures it.
We'd love to be part of your day — please reply here or reach out directly.
Warmly, Katie Galland | Sarah Darby Illustrations | info@sarahdarby.com.au | www.sarahdarby.com.au | @sarahdarbyfashionillustration

TEMPLATE 2 — SARAH BOOKED, REFER EMMA
Subject: Sarah Darby Illustrations — Your [DATE] Wedding
Hi [NAME],
Thank you so much for thinking of Sarah — unfortunately she is already booked for your date.
The good news: we'd love to introduce you to Emma Leonard, who illustrates exclusively through Sarah Darby Illustrations. Emma's work is beautiful, her style perfectly aligned with Sarah's, and she brings the same warmth and professionalism to every event.
Emma's most popular option is the 6-hour package:
• 60 A5 guest sketches, live on the night
• Luxury white envelope and backing card for each sketch
• Custom template design
• A complimentary couple's sketch at the start of the evening
• All art materials, Emma dressed to your dress code
Investment: $2,350 + GST
Emma's full information and package options are attached — smaller packages are also available.
We would love to still be part of your celebration. And if you have a future event coming up, we'd be delighted to pencil Sarah in — she books out early for peak season dates.
Warmly, Katie Galland | Sarah Darby Illustrations | info@sarahdarby.com.au | www.sarahdarby.com.au | @sarahdarbyfashionillustration

TEMPLATE 3 — BOTH ARTISTS BOOKED
Subject: Sarah Darby Illustrations — Your [DATE] Wedding
Hi [NAME],
Thank you so much for reaching out — we are genuinely sorry that both Sarah and Emma are already committed on your date.
We hope your wedding is everything you've dreamed of. If you're searching for a live illustrator, we'd suggest looking for FIDA-awarded illustrators in your area as a starting point for finding someone of a similar calibre.
Do follow Sarah on Instagram (@sarahdarbyfashionillustration) and if you have a future event, please come back to us — Sarah's calendar fills quickly and early enquiries are always welcome.
Wishing you the most wonderful celebration.
Warmly, Katie Galland | Sarah Darby Illustrations | info@sarahdarby.com.au | @sarahdarbyfashionillustration

TEMPLATE 4 — BOOKING CONFIRMATION
Subject: You're Booked — Sarah Darby Illustrations ✨
[NAME], what a thrill — we are absolutely delighted to be part of your [DATE] [EVENT TYPE].
Sarah personally looks forward to creating something unforgettable for you and your guests.
Here is what happens next:
DEPOSIT — You'll receive a Xero invoice for $500 + GST within 24 hours to secure your date. This is deducted from your total. Please check your junk folder if it doesn't arrive promptly.
YOUR HANDBOOK — We'll send Sarah's Event Handbook — a complete guide to how the day runs, template design options, and everything in between.
4 WEEKS BEFORE YOUR EVENT — Sarah's team will be in touch to confirm: your preferred template design and whether to include names and date; Sarah's arrival time; dress code so Sarah can coordinate her outfit; your venue contact (Sarah will need a trestle table and chair); whether you're happy for Sarah to share your event on Instagram and your handle to tag.
We cannot wait for [DATE].
Warmly, Katie Galland | Sarah Darby Illustrations | info@sarahdarby.com.au | www.sarahdarby.com.au | @sarahdarbyfashionillustration

TEMPLATE 5 — FOLLOW-UP (no response)
Subject: Your [DATE] Wedding — Sarah Darby Illustrations
Hi [NAME],
I wanted to follow up on the information we sent through — I hope it was helpful.
Sarah still has your date available, though her [YEAR] calendar is filling and we'd hate for you to miss out. If you have any questions about the packages, pricing, or how the evening typically runs, I'm very happy to talk it through.
If you've decided to go in a different direction, no problem at all — just let us know and we'll release the date.
Warmly, Katie Galland | Sarah Darby Illustrations | info@sarahdarby.com.au | www.sarahdarby.com.au | @sarahdarbyfashionillustration

TEMPLATE 6 — INCOMPLETE DETAILS
Subject: Your Enquiry — Sarah Darby Illustrations
Hi [NAME],
Thank you for reaching out — we'd love to help.
To check Sarah's availability and put together the right options for you, could you share: your event date, approximate guest numbers, and event location.
Once we have those we'll come back to you promptly.
Warmly, Katie Galland | Sarah Darby Illustrations | info@sarahdarby.com.au | www.sarahdarby.com.au | @sarahdarbyfashionillustration

TEMPLATE 7 — REVIEW REQUEST (send 10 days post event)
Subject: [NAME] — how was your evening?
Hi [NAME],
I hope the days since your [EVENT TYPE] have been filled with wonderful memories.
Sarah so enjoyed being part of your [DATE] [EVENT]. If you and your guests had a lovely experience, we would be genuinely grateful if you'd consider leaving a short Google review — it makes a real difference to a small creative business and means the world to Sarah personally.
Here is the link: https://g.co/kgs/dJHRi2M
Even a sentence or two is wonderful. And if there's anything we could have done better, please do reply here — we always want to know.
Thank you so much for having us.
Warmly, Katie Galland | Sarah Darby Illustrations | info@sarahdarby.com.au | www.sarahdarby.com.au | @sarahdarbyfashionillustration

TEMPLATE 8 — 3-WEEK PRE-WEDDING CHECK-IN (send 3 weeks before event)
Subject: Your [DATE] Wedding — A Few Details from Sarah Darby
Hi [NAME],
Your wedding is nearly here — how wonderful. We are so looking forward to being part of your day.
Before we see you, we'd love to confirm a few details:
• Template design — would you like your names and wedding date on the sketch? Or do you have a stationery graphic or motif you'd like us to incorporate? Browse Sarah's Instagram for examples: @sarahdarbyfashionillustration
• Arrival time — what time would you like Sarah to arrive?
• Final guest count — please share your current number so we can confirm your package
• Dress code — is there a colour palette Sarah should keep in mind? And is it black tie, cocktail, or something else?
• Instagram — Sarah loves to share the evening after the event. Please let us know your handle so she can tag you (and do let us know if you'd prefer she doesn't post)
• Venue contact — is there a wedding planner or event coordinator we can liaise with directly? Sarah will need a trestle-sized table and chair set up on the night
Please reply at your convenience — we want everything to be seamless for you.
Warmly, Katie Galland | Sarah Darby Illustrations | info@sarahdarby.com.au | www.sarahdarby.com.au | @sarahdarbyfashionillustration

YOUR TASKS for each enquiry:
1. Classify: Wedding / Races / Corporate / Luxury Retail / Luxury Hotel / Other
2. Detect situation: available / sarah-booked / both-booked / incomplete / follow-up / confirmation / review / pre-wedding-checkin
3. Suggest template 1-8 with one-line reason
4. Extract: clientName, clientEmail, eventDate, guestCount, location, howHeard, packageInterest, feeTotal
5. Set priority: High (clear intent + date), Medium (interested, vague), Low (early research)
6. Write personalised draft reply using correct template — insert known details, use [PLACEHOLDER] for unknowns
7. Write one internal note (one sentence)
8. followUpDate = 7 days from today

Return ONLY valid JSON, no markdown:
{"enquiryType":"Wedding|Races|Corporate|Luxury Retail|Luxury Hotel|Other","situation":"string","suggestedTemplate":1,"templateReason":"string","clientName":"string","clientEmail":"string","eventDate":"string","guestCount":"string","location":"string","howHeard":"string","packageInterest":"string","feeTotal":"string","priority":"High|Medium|Low","internalNote":"string","followUpDate":"string","emailSubject":"string","draftReply":"string"}`;

// ─── QUOTE SYSTEM PROMPT ──────────────────────────────────────────────────────
const QUOTE_PROMPT = `You are a quoting assistant for Sarah Darby Illustrations. Generate a professional, personalised quote email based on the event details provided.

PRICING:
WEDDINGS & SPECIAL EVENTS:
- 3hr / 30 guests: $1,200+GST
- 4hr / 40 guests: $1,550+GST  
- 5hr / 50 guests: $1,900+GST (most popular)
- 6hr / 60 guests: $2,350+GST
- 7hr / 70 guests: $2,750+GST
- 8hr / 80 guests: $3,200+GST
- Platinum Plus (6hr live + 100 studio after): $4,500+GST
- Add-ons: $30/person for group sketches
- Travel: fees apply outside Melbourne metro
- Sydney packages available (travel included in pricing)

CORPORATE / RACES / RETAIL / HOTEL: Custom pricing — quote "from $X" based on hours, note that full quote provided on confirmation of brief.

All packages include: A5 guest sketches, luxury white envelopes + backing cards, custom template design, host/couple sketch, all art materials, artist dressed to event dress code, event reel.

Deposit: $500+GST to secure date, deducted from total.

Write a warm, confident, premium-feeling quote. Include the recommended package, what's included, investment amount, and a clear next step (deposit to secure date). Sign off from Katie Galland, Sarah Darby Illustrations.

Return ONLY valid JSON:
{"emailSubject":"string","quoteEmail":"string","recommendedPackage":"string","investment":"string","notes":"string"}`;

// ─── OUTREACH SYSTEM PROMPT ───────────────────────────────────────────────────
const OUTREACH_PROMPT = `You are writing cold outreach emails for Sarah Darby — Australia's premier live fashion illustrator. Sarah has worked with Cartier, Valentino, Fendi, Ferrari, Rolls-Royce, Sofitel, Moët et Chandon, and illustrated for the Qatari royal family. FIDA Best Live Event Artist commendation.

BRAND VOICE: Confident. Prestigious. Warm but not grovelling. Never "I hope this email finds you well." Lead with value. Be specific to their industry. Short paragraphs. Clear ask at the end.

OUTREACH TEMPLATES BY STREAM:

LUXURY RETAIL — Event/Brand Manager
Opens strong with what live illustration does for brand events (creates content, stops foot traffic, gives guests a personalised keepsake, generates UGC). Reference similar brands Sarah has worked with (Cartier, Valentino, Fendi, Coach, Tod's). Pitch in-store activations, launch events, VIP evenings. Ask for a brief call or meeting.

LUXURY HOTEL — Events Coordinator  
Focus on guest experience differentiation — high tea activations, NYE, seasonal events, VIP guest experiences. Position as something that elevates the hotel's event reputation. Ask if they have upcoming activations where this could fit.

CORPORATE — EA / Events Manager
Focus on how live illustration transforms a standard corporate event into something memorable. Branded templates, guests take home a personalised keepsake. Mention Rolls-Royce, Ferrari as corporate clients. Ask about upcoming end-of-year, product launch, or milestone events.

HORSE RACES — Racing Club / Hospitality
Position Sarah as the ultimate races entertainment — glamour, fashion, the spectacle of watching someone be sketched in their race day outfit. Reference Melbourne Cup. Pitch for hospitality packages, marquees, VRC/club partnerships.

Generate 2 email variants: one direct/confident, one softer/relationship-first. Both concise (under 180 words each).

Return ONLY valid JSON:
{"emailSubject":"string","variant1Label":"string","variant1":"string","variant2Label":"string","variant2":"string"}`;

// ─── REVIEW REQUEST PROMPT ────────────────────────────────────────────────────
const REVIEW_PROMPT = `Write a personalised post-event review request email for Sarah Darby Illustrations. Warm, grateful, not pushy. Remind them of the specific event moment. One clear ask (Google review link). Optionally invite Instagram tag. Never say "mega" or use excessive exclamation marks.
Google review link: https://g.co/kgs/dJHRi2M
Instagram: @sarahdarbyfashionillustration
Sign off from Katie Galland, Sarah Darby Illustrations.
Return ONLY valid JSON: {"emailSubject":"string","reviewEmail":"string"}`;

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const TEMPLATES_LIST = [
  {id:1,label:"1 — First Wedding Reply (Sarah available)"},
  {id:2,label:"2 — Sarah Booked → Refer Emma"},
  {id:3,label:"3 — Both Artists Booked"},
  {id:4,label:"4 — Booking Confirmation"},
  {id:5,label:"5 — Follow-Up (no response)"},
  {id:6,label:"6 — Incomplete Details"},
  {id:7,label:"7 — Review Request"},
  {id:8,label:"8 — 3-Week Pre-Wedding Check-In"},
];
const STATUS_OPTS = ["New","Replied","Quoted","Booked","Lost"];
const STATUS_STYLE = {
  New:{bg:"#DDEEFF",color:"#1A5C8A"}, Replied:{bg:"#FFF8E1",color:"#856404"},
  Quoted:{bg:"#EDD5CC",color:"#8B3A2E"}, Booked:{bg:"#D4EDDA",color:"#155724"},
  Lost:{bg:"#EDE9E5",color:"#6C6260"},
};

function CopyBtn({text,label="Copy"}) {
  const [done,setDone]=useState(false);
  return <button onClick={()=>{navigator.clipboard.writeText(text);setDone(true);setTimeout(()=>setDone(false),2000);}}
    style={{fontSize:12,padding:"5px 14px",borderRadius:6,border:`1px solid ${C.blush}`,
      background:done?C.blush:C.white,color:C.charcoal,cursor:"pointer",fontFamily:"inherit",
      transition:"all .2s",fontWeight:600}}>{done?"Copied ✓":label}</button>;
}

function Field({label,value}) {
  if(!value||value==="Unknown") return null;
  return <div style={{marginBottom:5}}>
    <span style={{fontSize:11,fontWeight:700,color:C.mid,textTransform:"uppercase",letterSpacing:"0.08em"}}>{label}: </span>
    <span style={{fontSize:13,color:C.charcoal}}>{value}</span>
  </div>;
}

function SectionCard({children,style={}}) {
  return <div style={{background:C.white,borderRadius:12,padding:20,border:`1px solid ${C.blush}`,marginBottom:16,...style}}>{children}</div>;
}

function Label({children}) {
  return <div style={{fontSize:11,fontWeight:700,color:C.mid,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:6}}>{children}</div>;
}

async function callClaude(system, userMsg, maxTokens=1500) {
  const res = await fetch("https://api.anthropic.com/v1/messages",{
    method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:maxTokens,system,
      messages:[{role:"user",content:userMsg}]}),
  });
  const data = await res.json();
  const raw = data.content?.map(b=>b.text||"").join("").trim();
  return JSON.parse(raw.replace(/```json|```/g,"").trim());
}

async function appendToSheet(row) {
  if(GOOGLE_API_KEY==="YOUR_GOOGLE_API_KEY") return false;
  const url=`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!A:Q:append?valueInputOption=USER_ENTERED&key=${GOOGLE_API_KEY}`;
  const today=new Date().toLocaleDateString("en-AU");
  const res=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({values:[[
      row.status||"New",today,row.clientName||"",row.clientEmail||"",row.guestCount||"",
      row.enquiryType||"",row.location||"",row.eventDate||"",row.feeTotal||"",
      `Template ${row.suggestedTemplate}`,today,row.followUpDate||"","","",row.internalNote||"","","",
    ]]})});
  return res.ok;
}

function getReminders(tracker) {
  const today=new Date(); today.setHours(0,0,0,0);
  const reminders=[];
  tracker.forEach(r=>{
    if(r.followUpDate&&r.status==="New") {
      const parts=r.followUpDate.split("/");
      if(parts.length===3){
        const d=new Date(`${parts[2]}-${parts[1].padStart(2,"0")}-${parts[0].padStart(2,"0")}`);
        const diff=Math.ceil((d-today)/86400000);
        if(!isNaN(diff)&&diff<=3&&diff>=0) reminders.push({type:"followup",diff,row:r});
      }
    }
    if(r.eventDate&&r.status==="Booked") {
      const m=r.eventDate.match(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})/);
      if(m){
        const yr=m[3].length===2?"20"+m[3]:m[3];
        const ev=new Date(`${yr}-${m[2].padStart(2,"0")}-${m[1].padStart(2,"0")}`);
        const fw=new Date(ev); fw.setDate(fw.getDate()-28);
        const diff4=Math.ceil((fw-today)/86400000);
        if(!isNaN(diff4)&&diff4<=3&&diff4>=0) reminders.push({type:"precheck",diff:diff4,row:r});
        const tw=new Date(ev); tw.setDate(tw.getDate()-21);
        const diff3=Math.ceil((tw-today)/86400000);
        if(!isNaN(diff3)&&diff3<=3&&diff3>=0) reminders.push({type:"checkin",diff:diff3,row:r});
      }
    }
  });
  return reminders;
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [tab,setTab]=useState("agent");

  // Agent state
  const [enquiry,setEnquiry]=useState("");
  const [loading,setLoading]=useState(false);
  const [result,setResult]=useState(null);
  const [editedReply,setEditedReply]=useState("");
  const [overrideTpl,setOverrideTpl]=useState(null);
  const [rewriting,setRewriting]=useState(false);
  const [agentError,setAgentError]=useState("");
  const [sheetStatus,setSheetStatus]=useState("");

  // Tracker
  const [tracker,setTracker]=useState([]);

  // Quote state
  const [qForm,setQForm]=useState({clientName:"",clientEmail:"",eventType:"Wedding",eventDate:"",location:"",guestCount:"",hours:"5",notes:""});
  const [qResult,setQResult]=useState(null);
  const [qLoading,setQLoading]=useState(false);

  // Outreach state
  const [oForm,setOForm]=useState({stream:"Luxury Retail",brandName:"",contactName:"",contactRole:"",location:""});
  const [oResult,setOResult]=useState(null);
  const [oLoading,setOLoading]=useState(false);

  // Review state
  const [rForm,setRForm]=useState({clientName:"",eventType:"wedding",eventDate:"",guestHighlight:""});
  const [rResult,setRResult]=useState(null);
  const [rLoading,setRLoading]=useState(false);

  const reminders = getReminders(tracker);

  const btn=(variant="primary",extra={})=>({
    padding:variant==="primary"?"11px 28px":"9px 20px",borderRadius:8,
    border:variant==="primary"?"none":`1px solid ${C.blush}`,
    background:variant==="primary"?C.charcoal:C.white,
    color:variant==="primary"?C.white:C.charcoal,
    fontFamily:"inherit",fontSize:13,fontWeight:700,cursor:"pointer",
    letterSpacing:"0.04em",transition:"all .2s",...extra,
  });

  const input={padding:"9px 12px",borderRadius:8,border:`1px solid ${C.blush}`,
    background:C.white,fontFamily:"inherit",fontSize:13,color:C.charcoal,
    outline:"none",boxSizing:"border-box",width:"100%"};

  const tabStyle=(t)=>({
    padding:"9px 20px",border:"none",borderRadius:30,fontFamily:"inherit",
    fontSize:12,fontWeight:700,cursor:"pointer",letterSpacing:"0.05em",transition:"all .25s",
    background:tab===t?C.charcoal:"transparent",color:tab===t?C.white:C.mid,
    whiteSpace:"nowrap",
  });

  // ── Agent ──────────────────────────────────────────────────────────────────
  const processEnquiry=async()=>{
    if(!enquiry.trim()) return;
    setLoading(true);setResult(null);setAgentError("");setOverrideTpl(null);
    try {
      const parsed=await callClaude(SYSTEM_PROMPT,`Today: ${new Date().toLocaleDateString("en-AU")}\n\nEnquiry:\n${enquiry}`);
      setResult(parsed);setEditedReply(parsed.draftReply);
    } catch(e){setAgentError("Something went wrong. Please try again.");}
    setLoading(false);
  };

  const rewriteWithTemplate=async(tplId)=>{
    setOverrideTpl(tplId);setRewriting(true);
    try {
      const res=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,system:SYSTEM_PROMPT,
          messages:[{role:"user",content:`Rewrite the draft reply using Template ${tplId}. Keep all client details.\n\nOriginal enquiry:\n${enquiry}\n\nReturn only the email text, no JSON.`}]})});
      const data=await res.json();
      setEditedReply(data.content?.map(b=>b.text||"").join("").trim());
    } catch(e){}
    setRewriting(false);
  };

  const saveToTracker=async()=>{
    if(!result) return;
    const entry={id:Date.now(),status:"New",...result,draftReply:editedReply,suggestedTemplate:overrideTpl||result.suggestedTemplate};
    setTracker(prev=>[entry,...prev]);
    if(GOOGLE_API_KEY!=="YOUR_GOOGLE_API_KEY"){
      setSheetStatus("saving");
      const ok=await appendToSheet(entry);
      setSheetStatus(ok?"saved":"error");
    } else {setSheetStatus("no-key");}
    setTimeout(()=>setSheetStatus(""),4000);
    setResult(null);setEnquiry("");setOverrideTpl(null);setTab("tracker");
  };

  const updateStatus=(id,status)=>setTracker(prev=>prev.map(r=>r.id===id?{...r,status}:r));

  // ── Quote generator ────────────────────────────────────────────────────────
  const generateQuote=async()=>{
    setQLoading(true);setQResult(null);
    try {
      const parsed=await callClaude(QUOTE_PROMPT,
        `Generate a quote for:\nClient: ${qForm.clientName}\nEmail: ${qForm.clientEmail}\nEvent type: ${qForm.eventType}\nDate: ${qForm.eventDate}\nLocation: ${qForm.location}\nGuest count: ${qForm.guestCount}\nHours requested: ${qForm.hours}\nNotes: ${qForm.notes}`);
      setQResult(parsed);
    } catch(e){}
    setQLoading(false);
  };

  // ── Outreach generator ─────────────────────────────────────────────────────
  const generateOutreach=async()=>{
    setOLoading(true);setOResult(null);
    try {
      const parsed=await callClaude(OUTREACH_PROMPT,
        `Write outreach emails for:\nStream: ${oForm.stream}\nBrand/Company: ${oForm.brandName}\nContact name: ${oForm.contactName}\nContact role: ${oForm.contactRole}\nLocation: ${oForm.location}`);
      setOResult(parsed);
    } catch(e){}
    setOLoading(false);
  };

  // ── Review request generator ───────────────────────────────────────────────
  const generateReview=async()=>{
    setRLoading(true);setRResult(null);
    try {
      const parsed=await callClaude(REVIEW_PROMPT,
        `Write a review request for:\nClient name: ${rForm.clientName}\nEvent type: ${rForm.eventType}\nEvent date: ${rForm.eventDate}\nHighlight moment: ${rForm.guestHighlight}`);
      setRResult(parsed);
    } catch(e){}
    setRLoading(false);
  };

  const TABS=[
    {id:"agent",label:"Process Enquiry"},
    {id:"quote",label:"Quote Generator"},
    {id:"outreach",label:"Outreach"},
    {id:"review",label:"Review Request"},
    {id:"tracker",label:`Tracker${tracker.length>0?` (${tracker.length})`:""}`},
  ];

  return (
    <div style={{minHeight:"100vh",background:C.cream,fontFamily:"Georgia, serif",color:C.charcoal}}>

      {/* Header */}
      <div style={{background:C.white,borderBottom:`1px solid ${C.mist}`,padding:"18px 28px",
        display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
        <div>
          <div style={{fontSize:20,fontWeight:400,letterSpacing:"0.08em"}}>
            Sarah Darby <span style={{color:C.rose}}>Illustrations</span>
          </div>
          <div style={{fontSize:10,color:C.mid,letterSpacing:"0.14em",textTransform:"uppercase",marginTop:2}}>
            Communications Hub
          </div>
        </div>
        <div style={{display:"flex",gap:3,background:C.mist,borderRadius:30,padding:4,flexWrap:"wrap"}}>
          {TABS.map(t=><button key={t.id} style={tabStyle(t.id)} onClick={()=>setTab(t.id)}>{t.label}</button>)}
        </div>
      </div>

      {/* Toast */}
      {sheetStatus&&<div style={{position:"fixed",top:20,right:20,zIndex:999,padding:"10px 20px",
        borderRadius:8,fontFamily:"inherit",fontSize:13,fontWeight:600,
        background:sheetStatus==="saved"?C.green:sheetStatus==="error"?"#F8D7DA":C.blush,
        color:sheetStatus==="saved"?C.greenText:sheetStatus==="error"?"#721C24":C.charcoal,
        boxShadow:"0 4px 20px rgba(0,0,0,0.12)"}}>
        {sheetStatus==="saving"&&"Saving to Google Sheets..."}
        {sheetStatus==="saved"&&"✓ Saved to Google Sheets"}
        {sheetStatus==="error"&&"⚠ Couldn't reach Sheets — saved locally"}
        {sheetStatus==="no-key"&&"ℹ Add Google API key to enable Sheets sync"}
      </div>}

      <div style={{maxWidth:960,margin:"0 auto",padding:"28px 20px"}}>

        {/* ══ AGENT TAB ══════════════════════════════════════════════════════ */}
        {tab==="agent"&&<div>
          <h2 style={{fontSize:18,fontWeight:400,margin:"0 0 6px",letterSpacing:"0.04em"}}>Process Enquiry</h2>
          <p style={{fontSize:13,color:C.mid,margin:"0 0 20px"}}>Paste the full enquiry email. The AI will classify it, extract details, suggest a template and draft a reply.</p>

          <textarea value={enquiry} onChange={e=>setEnquiry(e.target.value)}
            placeholder="Paste enquiry email here..."
            style={{...input,minHeight:160,resize:"vertical",lineHeight:1.6,marginBottom:12}}/>

          <div style={{display:"flex",gap:10,marginBottom:20}}>
            <button style={btn("primary")} onClick={processEnquiry} disabled={loading||!enquiry.trim()}>
              {loading?"Processing...":"Process Enquiry →"}
            </button>
            {enquiry&&<button style={btn("secondary")} onClick={()=>{setEnquiry("");setResult(null);}}>Clear</button>}
          </div>

          {agentError&&<div style={{padding:"12px 16px",borderRadius:8,background:"#F8D7DA",color:"#721C24",fontSize:13,marginBottom:16}}>{agentError}</div>}

          {result&&<div>
            <SectionCard>
              <div style={{display:"flex",flexWrap:"wrap",gap:20,alignItems:"flex-start"}}>
                <div style={{flex:1,minWidth:200}}>
                  <div style={{fontSize:16,fontWeight:600,marginBottom:10}}>{result.clientName||"Unknown Client"}</div>
                  <Field label="Type" value={result.enquiryType}/>
                  <Field label="Event Date" value={result.eventDate}/>
                  <Field label="Guests" value={result.guestCount}/>
                  <Field label="Location" value={result.location}/>
                  <Field label="Email" value={result.clientEmail}/>
                  <Field label="How Heard" value={result.howHeard}/>
                  <Field label="Follow-up Due" value={result.followUpDate}/>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:8,alignItems:"flex-end"}}>
                  <span style={{fontSize:11,fontWeight:700,letterSpacing:"0.06em",padding:"3px 12px",
                    borderRadius:20,textTransform:"uppercase",
                    background:result.priority==="High"?"#F8D7DA":result.priority==="Medium"?"#FFF3CD":C.mist,
                    color:result.priority==="High"?C.deeprose:result.priority==="Medium"?"#856404":C.mid}}>
                    {result.priority}
                  </span>
                  <div style={{fontSize:12,color:C.mid,textAlign:"right",maxWidth:200}}>{result.internalNote}</div>
                </div>
              </div>
            </SectionCard>

            <SectionCard>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12,marginBottom:14}}>
                <div>
                  <div style={{fontSize:13,fontWeight:700,marginBottom:3}}>Suggested: Template {overrideTpl||result.suggestedTemplate}</div>
                  <div style={{fontSize:12,color:C.mid}}>{result.templateReason}</div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <span style={{fontSize:12,color:C.mid}}>Override:</span>
                  <select value={overrideTpl||result.suggestedTemplate}
                    onChange={e=>rewriteWithTemplate(Number(e.target.value))}
                    style={{...input,width:"auto",fontSize:12,padding:"6px 10px"}}>
                    {TEMPLATES_LIST.map(t=><option key={t.id} value={t.id}>{t.label}</option>)}
                  </select>
                </div>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                <Label>{rewriting?"Rewriting...":"Draft Reply — edit before sending"}</Label>
                <CopyBtn text={`Subject: ${result.emailSubject}\n\n${editedReply}`} label="Copy Full Email"/>
              </div>
              <div style={{fontSize:12,color:C.mid,marginBottom:10}}>
                Subject: <strong style={{color:C.charcoal}}>{result.emailSubject}</strong>
              </div>
              <textarea value={editedReply} onChange={e=>setEditedReply(e.target.value)}
                style={{...input,minHeight:260,resize:"vertical",lineHeight:1.7}}/>
            </SectionCard>

            <div style={{display:"flex",gap:10}}>
              <button style={btn("primary")} onClick={saveToTracker}>Save to Tracker →</button>
              <button style={btn("secondary")} onClick={()=>{setResult(null);setEnquiry("");}}>Discard</button>
            </div>
          </div>}
        </div>}

        {/* ══ QUOTE GENERATOR ════════════════════════════════════════════════ */}
        {tab==="quote"&&<div>
          <h2 style={{fontSize:18,fontWeight:400,margin:"0 0 6px",letterSpacing:"0.04em"}}>Quote Generator</h2>
          <p style={{fontSize:13,color:C.mid,margin:"0 0 20px"}}>Enter the event details and generate a personalised, on-brand quote email ready to send.</p>

          <SectionCard>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
              {[
                {label:"Client Name",key:"clientName",placeholder:"Emma Thompson"},
                {label:"Client Email",key:"clientEmail",placeholder:"emma@email.com"},
                {label:"Event Date",key:"eventDate",placeholder:"14 February 2026"},
                {label:"Location",key:"location",placeholder:"Melbourne CBD"},
              ].map(f=><div key={f.key}>
                <Label>{f.label}</Label>
                <input style={input} value={qForm[f.key]} placeholder={f.placeholder}
                  onChange={e=>setQForm(p=>({...p,[f.key]:e.target.value}))}/>
              </div>)}
              <div>
                <Label>Event Type</Label>
                <select style={input} value={qForm.eventType} onChange={e=>setQForm(p=>({...p,eventType:e.target.value}))}>
                  {["Wedding","Corporate","Horse Races","Luxury Retail","Luxury Hotel","Other"].map(v=><option key={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <Label>Guest Count</Label>
                <input style={input} value={qForm.guestCount} placeholder="80"
                  onChange={e=>setQForm(p=>({...p,guestCount:e.target.value}))}/>
              </div>
              <div>
                <Label>Hours Requested</Label>
                <select style={input} value={qForm.hours} onChange={e=>setQForm(p=>({...p,hours:e.target.value}))}>
                  {["2","3","4","5","6","7","8"].map(v=><option key={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <Label>Additional Notes</Label>
                <input style={input} value={qForm.notes} placeholder="Outdoor venue, black tie..."
                  onChange={e=>setQForm(p=>({...p,notes:e.target.value}))}/>
              </div>
            </div>
            <div style={{marginTop:16}}>
              <button style={btn("primary")} onClick={generateQuote} disabled={qLoading||!qForm.clientName}>
                {qLoading?"Generating...":"Generate Quote →"}
              </button>
            </div>
          </SectionCard>

          {qResult&&<SectionCard>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12,flexWrap:"wrap",gap:10}}>
              <div>
                <div style={{fontSize:13,fontWeight:700,marginBottom:3}}>
                  {qResult.recommendedPackage} — <span style={{color:C.rose}}>{qResult.investment}</span>
                </div>
                <div style={{fontSize:12,color:C.mid}}>{qResult.notes}</div>
              </div>
              <CopyBtn text={`Subject: ${qResult.emailSubject}\n\n${qResult.quoteEmail}`} label="Copy Quote Email"/>
            </div>
            <div style={{fontSize:12,color:C.mid,marginBottom:10}}>
              Subject: <strong style={{color:C.charcoal}}>{qResult.emailSubject}</strong>
            </div>
            <pre style={{fontSize:13,lineHeight:1.7,whiteSpace:"pre-wrap",margin:0,
              background:C.cream,padding:16,borderRadius:8,color:C.charcoal,fontFamily:"Georgia,serif"}}>
              {qResult.quoteEmail}
            </pre>
          </SectionCard>}
        </div>}

        {/* ══ OUTREACH GENERATOR ═════════════════════════════════════════════ */}
        {tab==="outreach"&&<div>
          <h2 style={{fontSize:18,fontWeight:400,margin:"0 0 6px",letterSpacing:"0.04em"}}>Outreach Generator</h2>
          <p style={{fontSize:13,color:C.mid,margin:"0 0 20px"}}>Generate targeted cold outreach emails for new business streams — luxury retail, hotels, corporate, and races.</p>

          <SectionCard>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
              <div>
                <Label>Stream</Label>
                <select style={input} value={oForm.stream} onChange={e=>setOForm(p=>({...p,stream:e.target.value}))}>
                  {["Luxury Retail","Luxury Hotel","Corporate","Horse Races"].map(v=><option key={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <Label>Brand / Company Name</Label>
                <input style={input} value={oForm.brandName} placeholder="Chanel Australia"
                  onChange={e=>setOForm(p=>({...p,brandName:e.target.value}))}/>
              </div>
              <div>
                <Label>Contact Name (if known)</Label>
                <input style={input} value={oForm.contactName} placeholder="Sophie Williams"
                  onChange={e=>setOForm(p=>({...p,contactName:e.target.value}))}/>
              </div>
              <div>
                <Label>Contact Role</Label>
                <input style={input} value={oForm.contactRole} placeholder="Events Manager"
                  onChange={e=>setOForm(p=>({...p,contactRole:e.target.value}))}/>
              </div>
              <div>
                <Label>Location</Label>
                <input style={input} value={oForm.location} placeholder="Melbourne"
                  onChange={e=>setOForm(p=>({...p,location:e.target.value}))}/>
              </div>
            </div>
            <div style={{marginTop:16}}>
              <button style={btn("primary")} onClick={generateOutreach} disabled={oLoading||!oForm.brandName}>
                {oLoading?"Generating...":"Generate Outreach →"}
              </button>
            </div>
          </SectionCard>

          {oResult&&<div>
            {[
              {label:oResult.variant1Label,body:oResult.variant1},
              {label:oResult.variant2Label,body:oResult.variant2},
            ].map((v,i)=><SectionCard key={i}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
                <div style={{fontSize:13,fontWeight:700}}>{v.label}</div>
                <CopyBtn text={`Subject: ${oResult.emailSubject}\n\n${v.body}`} label="Copy Email"/>
              </div>
              <div style={{fontSize:12,color:C.mid,marginBottom:10}}>
                Subject: <strong style={{color:C.charcoal}}>{oResult.emailSubject}</strong>
              </div>
              <pre style={{fontSize:13,lineHeight:1.7,whiteSpace:"pre-wrap",margin:0,
                background:C.cream,padding:16,borderRadius:8,color:C.charcoal,fontFamily:"Georgia,serif"}}>
                {v.body}
              </pre>
            </SectionCard>)}
          </div>}
        </div>}

        {/* ══ REVIEW REQUEST ══════════════════════════════════════════════════ */}
        {tab==="review"&&<div>
          <h2 style={{fontSize:18,fontWeight:400,margin:"0 0 6px",letterSpacing:"0.04em"}}>Review Request Generator</h2>
          <p style={{fontSize:13,color:C.mid,margin:"0 0 20px"}}>Send 10 days after the event while memories are fresh. Personalised, warm, one clear ask.</p>

          <SectionCard>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
              <div>
                <Label>Client Name</Label>
                <input style={input} value={rForm.clientName} placeholder="Emma & James"
                  onChange={e=>setRForm(p=>({...p,clientName:e.target.value}))}/>
              </div>
              <div>
                <Label>Event Type</Label>
                <select style={input} value={rForm.eventType} onChange={e=>setRForm(p=>({...p,eventType:e.target.value}))}>
                  {["wedding","corporate event","races day","brand activation","birthday celebration"].map(v=><option key={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <Label>Event Date</Label>
                <input style={input} value={rForm.eventDate} placeholder="14 February 2026"
                  onChange={e=>setRForm(p=>({...p,eventDate:e.target.value}))}/>
              </div>
              <div>
                <Label>Memorable Moment (optional)</Label>
                <input style={input} value={rForm.guestHighlight} placeholder="guests queueing, bride's reaction..."
                  onChange={e=>setRForm(p=>({...p,guestHighlight:e.target.value}))}/>
              </div>
            </div>
            <div style={{marginTop:16}}>
              <button style={btn("primary")} onClick={generateReview} disabled={rLoading||!rForm.clientName}>
                {rLoading?"Generating...":"Generate Review Request →"}
              </button>
            </div>
          </SectionCard>

          {rResult&&<SectionCard>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
              <div style={{fontSize:12,color:C.mid}}>Subject: <strong style={{color:C.charcoal}}>{rResult.emailSubject}</strong></div>
              <CopyBtn text={`Subject: ${rResult.emailSubject}\n\n${rResult.reviewEmail}`} label="Copy Email"/>
            </div>
            <pre style={{fontSize:13,lineHeight:1.7,whiteSpace:"pre-wrap",margin:0,
              background:C.cream,padding:16,borderRadius:8,color:C.charcoal,fontFamily:"Georgia,serif"}}>
              {rResult.reviewEmail}
            </pre>
          </SectionCard>}
        </div>}

        {/* ══ TRACKER ════════════════════════════════════════════════════════ */}
        {tab==="tracker"&&<div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
            <h2 style={{fontSize:18,fontWeight:400,margin:0,letterSpacing:"0.04em"}}>Enquiry Tracker</h2>
            <button style={btn("primary")} onClick={()=>setTab("agent")}>+ New Enquiry</button>
          </div>

          {/* Reminders */}
          {reminders.length>0&&<div style={{marginBottom:20,borderRadius:12,overflow:"hidden",border:"1px solid #F5C6CB"}}>
            <div style={{background:"#F8D7DA",padding:"10px 16px",fontSize:11,fontWeight:700,
              color:"#721C24",letterSpacing:"0.08em",textTransform:"uppercase"}}>
              ⏰ Action Required — {reminders.length} reminder{reminders.length>1?"s":""}
            </div>
            {reminders.map((rem,i)=><div key={i} style={{background:C.white,padding:"12px 16px",
              borderTop:i>0?`1px solid ${C.mist}`:"none",
              display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <span style={{fontWeight:700,fontSize:13}}>{rem.row.clientName}</span>
                <span style={{fontSize:13,color:C.mid,marginLeft:8}}>
                  {rem.type==="followup"
                    ?`Follow-up due ${rem.diff===0?"today":`in ${rem.diff} day${rem.diff>1?"s":""}`}`
                    :rem.type==="precheck"
                    ?`4-week pre-event check-in due ${rem.diff===0?"today":`in ${rem.diff} day${rem.diff>1?"s":""}`}`
                    :`3-week wedding check-in due ${rem.diff===0?"today":`in ${rem.diff} day${rem.diff>1?"s":""}`}`}
                </span>
              </div>
              <span style={{fontSize:11,padding:"3px 10px",borderRadius:20,fontWeight:700,
                background:rem.type==="followup"?"#FFF3CD":C.blush,
                color:rem.type==="followup"?"#856404":"#8B3A2E"}}>
                {rem.type==="followup"?"Follow-Up":rem.type==="precheck"?"4-Wk Check":"3-Wk Check-In"}
              </span>
            </div>)}
          </div>}

          {tracker.length===0
            ?<div style={{textAlign:"center",padding:"60px 20px",color:C.mid,fontSize:14,
                background:C.white,borderRadius:12,border:`1px solid ${C.mist}`}}>
                No enquiries yet — process your first one to get started.
              </div>
            :<div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
                <thead>
                  <tr style={{background:C.charcoal,color:C.white}}>
                    {["Status","Date In","Client","Type","Event Date","Location","Guests","Follow-Up","4-Wk Check","Priority","Actions"].map(h=>
                      <th key={h} style={{padding:"10px 12px",textAlign:"left",fontWeight:600,
                        fontSize:11,letterSpacing:"0.06em",textTransform:"uppercase",whiteSpace:"nowrap"}}>{h}</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {tracker.map((row,i)=>{
                    const today=new Date(); today.setHours(0,0,0,0);
                    let fuAlert=false,pcAlert=false,pcDate="";
                    if(row.followUpDate&&row.status==="New"){
                      const pts=row.followUpDate.split("/");
                      if(pts.length===3){const d=new Date(`${pts[2]}-${pts[1].padStart(2,"0")}-${pts[0].padStart(2,"0")}`);
                        if(!isNaN(d)&&Math.ceil((d-today)/86400000)<=3) fuAlert=true;}
                    }
                    if(row.eventDate&&row.status==="Booked"){
                      const m=row.eventDate.match(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})/);
                      if(m){const yr=m[3].length===2?"20"+m[3]:m[3];
                        const ev=new Date(`${yr}-${m[2].padStart(2,"0")}-${m[1].padStart(2,"0")}`);
                        const fw=new Date(ev);fw.setDate(fw.getDate()-28);
                        pcDate=fw.toLocaleDateString("en-AU");
                        if(!isNaN(fw)&&Math.ceil((fw-today)/86400000)<=3) pcAlert=true;}
                    }
                    return <tr key={row.id} style={{background:i%2===0?C.white:C.cream,borderBottom:`1px solid ${C.mist}`}}>
                      <td style={{padding:"10px 12px"}}>
                        <select value={row.status} onChange={e=>updateStatus(row.id,e.target.value)}
                          style={{padding:"4px 8px",borderRadius:6,border:`1px solid ${C.blush}`,fontFamily:"inherit",
                            fontSize:12,background:STATUS_STYLE[row.status]?.bg||C.white,
                            color:STATUS_STYLE[row.status]?.color||C.charcoal,cursor:"pointer",fontWeight:700}}>
                          {STATUS_OPTS.map(s=><option key={s}>{s}</option>)}
                        </select>
                      </td>
                      <td style={{padding:"10px 12px",color:C.mid,whiteSpace:"nowrap"}}>{new Date(row.id).toLocaleDateString("en-AU")}</td>
                      <td style={{padding:"10px 12px",fontWeight:600}}>{row.clientName}</td>
                      <td style={{padding:"10px 12px",color:C.mid,whiteSpace:"nowrap"}}>{row.enquiryType}</td>
                      <td style={{padding:"10px 12px",whiteSpace:"nowrap"}}>{row.eventDate}</td>
                      <td style={{padding:"10px 12px",color:C.mid}}>{row.location}</td>
                      <td style={{padding:"10px 12px",textAlign:"center"}}>{row.guestCount}</td>
                      <td style={{padding:"10px 12px",whiteSpace:"nowrap"}}>
                        <span style={{color:fuAlert?"#856404":C.mid,fontWeight:fuAlert?700:400}}>
                          {fuAlert?"⚠ ":""}{row.followUpDate||"—"}
                        </span>
                      </td>
                      <td style={{padding:"10px 12px",whiteSpace:"nowrap"}}>
                        <span style={{color:pcAlert?"#8B3A2E":C.mid,fontWeight:pcAlert?700:400}}>
                          {row.status==="Booked"?(pcAlert?"⚠ ":"")+pcDate:"—"}
                        </span>
                      </td>
                      <td style={{padding:"10px 12px"}}>
                        <span style={{fontSize:11,fontWeight:700,
                          color:row.priority==="High"?C.rose:row.priority==="Medium"?C.gold:C.mid}}>
                          {row.priority}
                        </span>
                      </td>
                      <td style={{padding:"10px 12px"}}>
                        <CopyBtn text={`Subject: ${row.emailSubject||""}\n\n${row.draftReply||""}`} label="Copy Reply"/>
                      </td>
                    </tr>;
                  })}
                </tbody>
              </table>
            </div>}
        </div>}
      </div>

      <div style={{textAlign:"center",padding:"24px",fontSize:11,color:C.mid,
        borderTop:`1px solid ${C.mist}`,marginTop:40,letterSpacing:"0.08em"}}>
        SARAH DARBY ILLUSTRATIONS — COMMUNICATIONS HUB
      </div>
    </div>
  );
}
