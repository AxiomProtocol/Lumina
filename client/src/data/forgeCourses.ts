import { Video, Wallet, Coins, Heart, LucideIcon } from "lucide-react";

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  overview: string;
  keyTakeaways: string[];
  content?: string; // Full lesson content in markdown format
}

export interface CourseContent {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  lessons: Lesson[];
  totalDuration: string;
  level: number;
  badge: string;
  prerequisites: string[];
  learningOutcomes: string[];
  onchainId?: number;
}

export interface CourseCategory {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  iconColor: string;
  description: string;
  courses: number[];
}

export const COURSE_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

export const COURSE_CONTENT: Record<number, CourseContent> = {
  // ============================================
  // CREATOR FOUNDATIONS TRACK
  // ============================================
  101: {
    id: 101,
    title: "Content That Connects",
    description: "Learn to create viral short-form videos that resonate with your audience",
    longDescription: "Master the art of creating compelling short-form video content that captures attention, sparks emotion, and drives engagement. From ideation to execution, learn the secrets behind viral content that builds lasting connections with your audience.",
    totalDuration: "2 hours",
    level: 0,
    badge: "Creator I",
    prerequisites: [],
    learningOutcomes: [
      "Understand the psychology behind viral content",
      "Master hook techniques that capture attention in the first 3 seconds",
      "Create emotionally resonant stories that drive shares",
      "Develop a consistent content creation workflow"
    ],
    lessons: [
      {
        id: 1,
        title: "The Anatomy of Viral Content",
        duration: "15 min",
        overview: "Discover what makes content spread. We'll analyze successful viral videos and identify the common patterns that make people hit share.",
        keyTakeaways: [
          "The 5 emotional triggers that drive sharing",
          "Pattern recognition in viral content",
          "Understanding the algorithm's preferences"
        ],
        content: `## What Makes Content Go Viral?

Viral content isn't random luck—it follows predictable patterns. After analyzing thousands of viral videos across platforms, researchers have identified key elements that dramatically increase shareability.

### The 5 Emotional Triggers

**1. Awe & Wonder**
Content that makes people say "wow" gets shared. This could be an incredible talent, a beautiful scene, or an unexpected twist. Think: amazing transformations, skills showcased, or mind-blowing facts.

**2. Joy & Humor**
People love to spread happiness. Funny content that makes viewers laugh out loud is among the most shared. The key is relatability—humor that reflects common experiences.

**3. Inspiration & Hope**
Uplifting stories about overcoming challenges, achieving dreams, or acts of kindness spread quickly. People share to inspire others and associate themselves with positive messages.

**4. Surprise & Curiosity**
Unexpected twists, reveals, and "wait for it" moments keep viewers engaged and compel them to share. The element of surprise breaks pattern recognition.

**5. Social Currency**
People share content that makes them look good—informed, trendy, or helpful. Educational content and insider tips spread because sharing elevates the sharer's status.

### Pattern Recognition

Study viral content in your niche:
- What emotions does it trigger?
- What's the pacing like?
- How quickly does it hook you?
- What makes you want to share it?

### Algorithm Basics

Modern algorithms prioritize:
- **Watch time**: How long people stay watching
- **Engagement**: Likes, comments, shares, saves
- **Retention**: Do people watch to the end?
- **Replays**: Content people watch multiple times

🔥 **Action Step**: Save 10 viral videos in your niche. Analyze what emotional trigger each one uses.`
      },
      {
        id: 2,
        title: "Crafting the Perfect Hook",
        duration: "15 min",
        overview: "You have 3 seconds to capture attention. Learn proven hook formulas that stop the scroll and compel viewers to watch.",
        keyTakeaways: [
          "10 hook templates that work every time",
          "Visual vs verbal hooks",
          "Testing and iterating on hooks"
        ],
        content: `## The 3-Second Rule

You have exactly 3 seconds to capture attention before someone scrolls past. Your hook is the single most important element of your content.

### 10 Hook Templates That Work

**1. The Bold Statement**
"Nobody talks about this, but..."
"This changed everything for me..."

**2. The Question Hook**
"What would you do if...?"
"Did you know that...?"

**3. The Controversy**
"Unpopular opinion: ..."
"I'm going to say what everyone's thinking..."

**4. The Promise**
"By the end of this video, you'll know..."
"I'm about to show you exactly how..."

**5. The Story Opener**
"So this happened yesterday..."
"I never thought I'd share this, but..."

**6. The Pattern Interrupt**
Start with an unusual visual or sound
Break expectations immediately

**7. The Relatability**
"POV: When you..."
"Tell me you're a [type] without telling me..."

**8. The Urgency**
"Stop scrolling if you..."
"You need to hear this..."

**9. The Social Proof**
"Millions of people don't know this..."
"The secret that [experts] don't want you to know..."

**10. The Demonstration**
Start with the end result
Show the transformation immediately

### Visual vs Verbal Hooks

**Visual Hooks**: Movement, bright colors, close-ups, unexpected imagery
**Verbal Hooks**: First words, tone of voice, pacing

The best content uses BOTH simultaneously.

### Testing Your Hooks

- Create 3 different hooks for the same content
- Post at similar times
- Measure which gets highest retention
- Double down on what works

🔥 **Action Step**: Write 5 different hooks for your next piece of content. Test them with friends before posting.`
      },
      {
        id: 3,
        title: "Storytelling in 60 Seconds",
        duration: "20 min",
        overview: "Master the micro-storytelling format. Learn to compress compelling narratives into bite-sized content that leaves impact.",
        keyTakeaways: [
          "The 3-act structure for short content",
          "Creating tension and resolution quickly",
          "Using visual storytelling techniques"
        ],
        content: `## The Art of Micro-Storytelling

Great stories follow the same structure whether they're 2 hours or 60 seconds. The key is compression—every second must count.

### The 3-Act Structure (Compressed)

**Act 1: Setup (0-10 seconds)**
- Introduce the character/situation
- Establish stakes immediately
- Create curiosity

**Act 2: Conflict (10-45 seconds)**
- Present the challenge
- Build tension
- Show the struggle

**Act 3: Resolution (45-60 seconds)**
- Payoff the setup
- Deliver the punchline/lesson
- End with impact

### Creating Tension Quickly

Tension = the gap between expectation and reality

Ways to create tension:
- **Time pressure**: "I only had 24 hours..."
- **Stakes**: "If this didn't work, I'd lose everything..."
- **Mystery**: "What I found shocked me..."
- **Conflict**: "They said it couldn't be done..."

### Visual Storytelling Techniques

**Show, Don't Tell**
Instead of saying "I was nervous," show shaky hands or pacing.

**Use B-Roll**
Cut between talking and showing the action.

**Facial Expressions**
Close-ups of genuine reactions create emotional connection.

**Transitions as Story Elements**
Use cuts, zooms, and transitions to emphasize story beats.

### The Power of Specificity

Generic: "I started a business"
Specific: "I turned $47 into a six-figure business from my mom's garage"

Details make stories believable and memorable.

🔥 **Action Step**: Take one of your experiences and write it as a 60-second story using the 3-act structure. Time yourself reading it aloud.`
      },
      {
        id: 4,
        title: "Emotional Resonance",
        duration: "15 min",
        overview: "Content that makes people feel gets shared. Understand how to authentically connect with your audience's emotions.",
        keyTakeaways: [
          "Mapping emotional journeys",
          "Authenticity vs performance",
          "Building parasocial connections"
        ],
        content: `## Making People Feel

The content people remember isn't what made them think—it's what made them *feel*. Emotional resonance is your superpower.

### Mapping Emotional Journeys

Every piece of content should take viewers on an emotional journey:

**The Rollercoaster Method**
1. Start with a relatable low point
2. Build hope through the middle
3. Deliver an emotional high at the end

**The Surprise Method**
1. Set up one expectation
2. Subvert it completely
3. Land on an unexpected emotion

### Authenticity vs Performance

**Authenticity Wins**
- Imperfect moments feel real
- Vulnerability creates connection
- Share genuine struggles, not just wins

**The Performance Trap**
- Overly polished = unrelatable
- Fake emotions are obvious
- Trying too hard pushes people away

**Finding the Balance**
Be intentional about *what* you share, but genuine in *how* you share it.

### Building Parasocial Connections

Parasocial = one-sided relationships where viewers feel they know you

How to build it:
- **Consistency**: Show up regularly
- **Intimacy**: Share personal details appropriately
- **Direct address**: Talk TO your audience, not AT them
- **Callbacks**: Reference past content and inside jokes
- **Responsiveness**: Reply to comments, acknowledge your community

### The Mirror Effect

People are drawn to content that reflects their own experiences:
- "This is SO me"
- "I thought I was the only one"
- "Finally someone said it"

Create content that makes people feel seen and understood.

🔥 **Action Step**: Write down 3 genuine struggles you've overcome. These are your most powerful content topics.`
      },
      {
        id: 5,
        title: "Visual Excellence on Any Budget",
        duration: "15 min",
        overview: "You don't need expensive equipment to create stunning content. Learn smartphone filming techniques and free editing tools.",
        keyTakeaways: [
          "Lighting with natural light",
          "Smartphone camera settings",
          "Free editing apps and techniques"
        ],
        content: `## Pro Quality on a Phone Budget

The best camera is the one you have with you. Your smartphone can create professional-quality content when you know how to use it.

### Lighting with Natural Light

**The Golden Hours**
Best filming times: 1 hour after sunrise, 1 hour before sunset. Soft, warm, flattering light.

**Window Light**
- Face the window for even lighting
- 45-degree angle for dimension
- Avoid direct sunlight (too harsh)

**DIY Diffusion**
- White sheet over window = soft light
- White posterboard = bounce light into shadows
- Ring lights are affordable and effective

### Smartphone Camera Settings

**Lock Your Focus**
Tap and hold on your subject to lock focus and exposure.

**4K When Possible**
Higher resolution = more flexibility in editing. Most modern phones support 4K.

**Grid Lines On**
Use the rule of thirds for better composition.

**Clean Your Lens**
Seriously—fingerprints ruin more shots than bad lighting.

### Free Editing Apps

**CapCut** (Free)
- Professional features
- Auto-captions
- Effects and transitions

**InShot** (Free)
- Easy interface
- Good for quick edits
- Text and music

**DaVinci Resolve** (Free, Desktop)
- Hollywood-level color grading
- Professional audio tools
- Steeper learning curve but incredibly powerful

### Quick Editing Tips

1. Cut the fluff—if it doesn't add value, remove it
2. Add captions—85% of videos are watched on mute
3. Match music to mood and pacing
4. Use jump cuts to keep energy high
5. Color correct for consistency

🔥 **Action Step**: Film 30 seconds of content using only natural window light and your phone. Compare it to your previous content.`
      },
      {
        id: 6,
        title: "Sound Design That Pops",
        duration: "10 min",
        overview: "Audio is 50% of your video. Learn to select music, record clear audio, and use sound effects to enhance your content.",
        keyTakeaways: [
          "Royalty-free music sources",
          "Recording clean audio",
          "Sound effects timing"
        ],
        content: `## Audio: The Unsung Hero

Bad audio will make people scroll faster than bad video. Great audio is invisible—you don't notice it because it just *works*.

### Royalty-Free Music Sources

**Free Options:**
- **YouTube Audio Library**: Huge selection, completely free
- **Pixabay Music**: Free for commercial use
- **Uppbeat**: Free tier available

**Trending Sounds:**
- Use platform's built-in sounds for discoverability
- Trending audio = algorithm boost
- Put your own spin on popular sounds

### Recording Clean Audio

**Environment Matters**
- Small rooms with soft surfaces absorb echo
- Avoid rooms with hard floors and bare walls
- Close windows to block traffic noise

**Phone Recording Tips**
- Get close to the mic (12-18 inches)
- Record in a closet for surprisingly good sound
- Use voice memos for audio-only recording

**Affordable Upgrades**
- Lavalier mics ($20-50) plug into your phone
- USB mics for desktop content
- Windscreens for outdoor recording

### Sound Effects That Pop

**Timing is Everything**
Sound effects should hit on the beat:
- Whoosh on transitions
- Pop on text appearing
- Ding on key points

**Less is More**
- 2-3 well-placed effects > constant noise
- Match effect intensity to content energy
- Preview without sound effects to check if needed

### Audio Mixing Basics

**Volume Levels**
- Voice: Primary, loudest element
- Music: 20-30% volume under voice
- Effects: Match or slightly under music

**The Ducking Technique**
Lower music automatically when voice starts. Most editing apps have this built in.

🔥 **Action Step**: Rewatch your last 3 videos with headphones. Note where audio could be improved.`
      },
      {
        id: 7,
        title: "The Content Creation Workflow",
        duration: "15 min",
        overview: "Build a sustainable system for consistent content creation. From batch filming to editing pipelines.",
        keyTakeaways: [
          "Batch content creation",
          "Content calendars",
          "Editing efficiency tips"
        ],
        content: `## Building Your Content Machine

Consistency beats virality. The creators who win are the ones who show up regularly. That requires a sustainable system.

### Batch Content Creation

**The Power of Batching**
Film multiple videos in one session:
- Same setup, minimal context switching
- Get in the creative flow once
- More content, less effort

**The 10x Rule**
When you sit down to create, aim for 10 pieces of content:
- 3 might be great
- 5 will be good
- 2 might not work
- But you have a week's worth of content

### Content Calendars

**Planning Ahead**
- Map out themes for the month
- Align with trends and seasons
- Build series that connect

**Tools That Help**
- Notion: Free, flexible database
- Google Sheets: Simple and shareable
- Trello: Visual kanban boards

**The 3-Bucket System**
1. **Evergreen**: Content that's always relevant
2. **Trending**: Riding current waves
3. **Personal**: Your unique stories

### Editing Efficiency

**Template Everything**
- Save intro/outro templates
- Create preset effects you use often
- Build a library of transitions

**The 80/20 Rule**
80% of impact comes from 20% of edits:
- Good hook
- Clear audio
- Tight cuts
- Strong ending

Focus on these before perfecting the rest.

**Outsourcing**
When to consider help:
- You're spending more time editing than creating
- Editing is burning you out
- You can afford it ($50-200/video)

🔥 **Action Step**: Block 3 hours this week. Film 5 pieces of content in that one session. Edit them throughout the week.`
      },
      {
        id: 8,
        title: "Analyzing and Improving",
        duration: "15 min",
        overview: "Use analytics to understand what works. Learn to read metrics and iterate on your content strategy.",
        keyTakeaways: [
          "Key metrics that matter",
          "A/B testing content",
          "Continuous improvement mindset"
        ],
        content: `## Data-Driven Content Creation

Your analytics tell a story. Learn to read it and use it to improve.

### Key Metrics That Matter

**1. Retention Rate**
The most important metric. How long do people watch?
- 0-3 seconds: Hook effectiveness
- Middle: Content quality
- End: Payoff delivery

**2. Engagement Rate**
(Likes + Comments + Shares + Saves) / Views
- 5%+ is good
- 10%+ is excellent
- Saves indicate high value content

**3. Share Rate**
Shares are the holy grail:
- Each share = free distribution
- High share rate = viral potential
- Focus on "share-worthy" content

**4. Follower Conversion**
Views to Followers ratio:
- Are viewers becoming fans?
- Which content converts best?
- Build more of what converts

### A/B Testing Content

**What to Test**
- Different hooks
- Thumbnail variations
- Posting times
- Content lengths
- Call-to-actions

**How to Test**
- Change ONE variable at a time
- Post at similar times
- Compare performance after 48 hours
- Document results

**Reading Results**
- 10-20% difference = possibly random
- 30%+ difference = significant signal
- Repeat tests to confirm

### The Continuous Improvement Loop

**The Weekly Review**
Every week, answer:
1. What performed best? Why?
2. What underperformed? Why?
3. What will I try next week?

**The Monthly Audit**
1. Top 3 performing content pieces
2. Common threads between winners
3. Trends to double down on
4. What to stop doing

**Never Stop Learning**
- Study your competitors
- Stay updated on platform changes
- Experiment constantly
- Share learnings with creator friends

### Congratulations!

You've completed "Content That Connects"!

You now have the foundation to:
- Create emotionally resonant content
- Hook viewers in the first 3 seconds
- Tell compelling stories
- Produce quality on any budget
- Build sustainable systems
- Use data to improve

🔥 **Final Action Step**: Post your first piece of content using everything you've learned. Share it with our community for feedback!`
      }
    ]
  },

  102: {
    id: 102,
    title: "Building Your Brand",
    description: "Profile optimization, niche selection, and consistency strategies",
    longDescription: "Your personal brand is your most valuable asset in the creator economy. Learn to define your unique voice, optimize your profile for discovery, and build a cohesive brand identity that attracts your ideal audience.",
    totalDuration: "1.5 hours",
    level: 0,
    badge: "Brand Builder",
    prerequisites: [],
    learningOutcomes: [
      "Define your unique value proposition as a creator",
      "Optimize profiles for maximum discoverability",
      "Create a cohesive visual and verbal brand identity",
      "Develop a content strategy aligned with your brand"
    ],
    lessons: [
      {
        id: 1,
        title: "Finding Your Niche",
        duration: "15 min",
        overview: "Discover the intersection of your passions, skills, and market demand. Learn to position yourself in a niche where you can thrive.",
        keyTakeaways: [
          "The passion-skill-demand framework",
          "Niche vs micro-niche strategies",
          "Competitive analysis techniques"
        ],
        content: `## Finding Your Perfect Niche

The most successful creators don't try to appeal to everyone. They find a specific niche where they can become the go-to voice.

### The Passion-Skill-Demand Framework

Your ideal niche sits at the intersection of three circles:

**1. Passion**
What could you talk about for hours? What do you naturally research and explore? Passion fuels consistency—you'll need to create hundreds of pieces of content.

**2. Skill**
What are you genuinely good at? This could be knowledge, abilities, or unique experiences. Your skill gives you credibility.

**3. Demand**
Are people actively searching for this content? Is there an audience willing to engage? Demand ensures your efforts pay off.

### Niche vs Micro-Niche

**Broad Niche**: Fitness
**Niche**: Home workouts
**Micro-Niche**: 15-minute home workouts for busy moms

The more specific, the:
- Easier to become the expert
- More targeted your audience
- Clearer your content direction
- But smaller the potential audience

Start micro-niche, expand as you grow.

### Competitive Analysis

Before committing, research your niche:

**Who's already there?**
- Top 10 creators in your space
- Their content style and frequency
- What's working for them

**What gaps exist?**
- Underserved sub-topics
- Audiences not being reached
- Perspectives not represented

**Can you differentiate?**
- Your unique angle
- Your specific audience
- Your distinct style

### The Validation Test

Before fully committing:
1. Create 10 pieces of content in your niche
2. Post them and measure engagement
3. Notice how you feel creating them
4. Adjust based on response

Your niche can evolve, but start with focus.

🔥 **Action Step**: Fill out the passion-skill-demand framework. List 5 potential niches at their intersection.`
      },
      {
        id: 2,
        title: "Defining Your Unique Voice",
        duration: "15 min",
        overview: "Stand out by being authentically you. Develop a distinct personality and communication style that resonates.",
        keyTakeaways: [
          "Voice and tone development",
          "Authenticity in content creation",
          "Signature phrases and catchphrases"
        ],
        content: `## Your Voice is Your Superpower

In a sea of content, your unique voice is what makes you memorable. People follow personalities, not just information.

### Understanding Voice vs Tone

**Voice** = Your consistent personality
- Your humor style
- Your energy level
- Your values and beliefs
- Your vocabulary choices

**Tone** = How you adapt to context
- Celebratory for wins
- Empathetic for struggles
- Educational for tutorials
- Hype for announcements

Your voice stays consistent; your tone flexes.

### Discovering Your Natural Voice

Don't fabricate a persona—amplify who you already are:

**Record yourself talking naturally**
- Call a friend about your topic
- Notice your natural expressions
- Capture your genuine enthusiasm

**Review your texts and messages**
- How do you naturally communicate?
- What phrases do you use often?
- What's your texting style?

**Ask close friends**
- "How would you describe my personality?"
- "What do I say all the time?"
- "What makes me... me?"

### Voice Characteristics to Define

**Energy Level**: Calm and thoughtful vs. high energy and hype
**Humor Style**: Dry wit, silly, sarcastic, wholesome
**Formality**: Professional, casual, street, academic
**Emotional Range**: Reserved, expressive, vulnerable
**Perspective**: Optimistic, realistic, contrarian

### Signature Elements

Create memorable moments:

**Catchphrases**
- Greeting: "What's good, everyone!"
- Signoff: "Stay curious, stay creative"
- Reaction: "You know what? That's valid."

**Visual Signatures**
- Hand gestures
- Facial expressions
- Background elements

**Audio Signatures**
- Intro sounds
- Transition phrases
- Music choices

### Authenticity Over Perfection

What resonates:
- Real reactions
- Genuine opinions
- Honest struggles
- Imperfect moments

What doesn't:
- Trying too hard
- Copying other creators
- Hiding your personality
- Being what you think people want

🔥 **Action Step**: Record a 2-minute unscripted video talking about your topic. Watch it back and note 5 things that feel uniquely "you."`
      },
      {
        id: 3,
        title: "Visual Brand Identity",
        duration: "15 min",
        overview: "Create a recognizable visual style. From color palettes to thumbnails, build visual consistency across your content.",
        keyTakeaways: [
          "Color psychology for creators",
          "Thumbnail design principles",
          "Visual consistency across platforms"
        ],
        content: `## Creating Visual Recognition

When someone scrolls past your content, they should know it's you before reading a word. Visual branding creates instant recognition.

### Color Psychology for Creators

Colors evoke emotions. Choose intentionally:

**Red**: Energy, passion, urgency
**Orange**: Creativity, enthusiasm, warmth
**Yellow**: Optimism, clarity, happiness
**Green**: Growth, health, nature
**Blue**: Trust, calm, professionalism
**Purple**: Creativity, luxury, wisdom
**Pink**: Playful, nurturing, romantic
**Black**: Sophistication, power, elegance

### Building Your Color Palette

**Primary Color**: Your main brand color (1)
**Secondary Colors**: Complementary colors (2-3)
**Accent Color**: For highlights and CTAs (1)
**Neutral Colors**: For text and backgrounds

Tools to help:
- Coolors.co for palette generation
- Adobe Color for combinations
- Canva's color palette generator

### Thumbnail Design Principles

Thumbnails are billboards. Make them pop:

**The 3-Second Rule**
- Clear focal point
- Readable at small sizes
- Emotional expression

**What Works**:
- Faces with expressions
- Bold, contrasting colors
- Large, readable text (3-5 words max)
- Consistent frame/template

**What Doesn't**:
- Cluttered designs
- Small text
- Low contrast
- Inconsistent styles

### Visual Consistency Checklist

**Fonts**
- Headline font (bold, attention-grabbing)
- Body font (readable, clean)
- Stick to 2-3 fonts maximum

**Photo/Video Style**
- Lighting preference
- Filter/color grade
- Framing and composition

**Graphics and Overlays**
- Icon style
- Shape preferences
- Animation style

### Templates Save Time

Create templates for:
- Thumbnails
- Stories/Posts
- Quote graphics
- Announcement graphics

Use the same layouts, swap the content.

### Brand Board

Create a one-page visual reference:
- Logo variations
- Color codes (hex values)
- Font names and uses
- Photo/graphic style examples
- Do's and don'ts

🔥 **Action Step**: Create a simple brand board with your colors, fonts, and style references. Use Canva's free brand kit feature.`
      },
      {
        id: 4,
        title: "Profile Optimization",
        duration: "15 min",
        overview: "Your profile is your storefront. Optimize every element from bio to profile picture to convert visitors into followers.",
        keyTakeaways: [
          "Bio writing formulas",
          "Profile picture best practices",
          "Link-in-bio strategies"
        ],
        content: `## Your Profile is Your Storefront

Every profile visit is a potential follower. Optimize every element for conversion.

### Profile Picture Best Practices

**What Works**:
- Clear face shot (fill 60% of frame)
- Good lighting (natural or ring light)
- Eye contact with camera
- Genuine expression (smile or character)
- Brand colors in background/clothing

**What Doesn't**:
- Group photos (who are you?)
- Distant shots (can't see you)
- Heavy filters (looks inauthentic)
- Logos (unless you're a business)
- Sunglasses (eyes build connection)

### Bio Writing Formulas

You have limited characters. Make them count.

**Formula 1: What + Who + Why**
"[What you do] for [who you help] | [What they'll get]"
Example: "Crypto simplified for beginners | Learn Web3 without the jargon"

**Formula 2: Credibility + Promise**
"[Your credential] | [What you share]"
Example: "Ex-TikTok employee | Behind-the-scenes algorithm secrets"

**Formula 3: Personality + Value**
"[Fun personal fact] | [What you offer]"
Example: "Coffee addict + code nerd | Daily coding tips that actually work"

### Bio Elements to Include

**Line 1**: What you do / who you are
**Line 2**: Who you help / what value you provide
**Line 3**: Credibility or personality
**Line 4**: Call-to-action

Add relevant emojis for visual breaks (but don't overdo it).

### Link-in-Bio Strategies

One link, multiple destinations:

**Option 1: Simple Landing Page**
- Linktree, Beacons, or Stan
- List your key links
- Feature current promotions

**Option 2: Custom Page**
- Your own website
- Email capture
- Full control

**What to Link**:
- Latest content/project
- Email newsletter signup
- Other platforms
- Products/services
- Community/Discord

### Username Strategy

**Consistency**: Same handle everywhere when possible
**Memorable**: Easy to spell and say
**Searchable**: Includes your niche keyword if natural
**Professional**: Avoid numbers/underscores if possible

### Highlights/Pinned Content

First impressions matter:
- Pin your best-performing content
- Showcase different content types
- Include a "Start Here" or intro post
- Feature testimonials/results

🔥 **Action Step**: Audit your current profile against this checklist. Make 3 immediate improvements.`
      },
      {
        id: 5,
        title: "Content Pillars Strategy",
        duration: "15 min",
        overview: "Organize your content around key themes. Build content pillars that reinforce your brand and serve your audience.",
        keyTakeaways: [
          "Defining 3-5 content pillars",
          "Balancing variety and consistency",
          "Content pillar rotation strategies"
        ],
        content: `## The Content Pillars Framework

Random content confuses your audience. Content pillars give structure while maintaining variety.

### What Are Content Pillars?

Content pillars are 3-5 core themes that all your content falls under. They:
- Define what you talk about
- Set audience expectations
- Make content planning easier
- Reinforce your expertise

### Choosing Your Pillars

**Step 1: List Everything**
Write down every topic you could cover in your niche.

**Step 2: Group Themes**
Cluster similar topics into categories.

**Step 3: Select 3-5 Core Pillars**
Choose themes that:
- You can consistently create around
- Your audience cares about
- Show your unique perspective
- Support each other

### Content Pillar Examples

**Fitness Creator**:
1. Workout tutorials
2. Nutrition tips
3. Mindset/motivation
4. Personal fitness journey

**Crypto Educator**:
1. Beginner tutorials
2. Market analysis
3. Project reviews
4. Personal portfolio updates

**Business Coach**:
1. Marketing strategies
2. Mindset development
3. Client stories
4. Behind-the-scenes

### The 3 Content Types Per Pillar

For each pillar, create three types:

**Educational**: Teach something valuable
**Entertaining**: Make them smile/feel
**Personal**: Share your journey

This creates 9-15 content categories total.

### Content Pillar Rotation

**Option 1: Daily Rotation**
Monday: Pillar 1
Tuesday: Pillar 2
Wednesday: Pillar 3
Thursday: Pillar 1
Friday: Pillar 4

**Option 2: Weighted Rotation**
Focus 50% on your main pillar
Distribute 50% among others

**Option 3: Responsive Rotation**
More of what's performing well
Less of what isn't resonating

### Pillar Documentation

For each pillar, document:
- Sub-topics within the pillar
- Content ideas bank
- Best-performing examples
- Hashtags and keywords
- Visual style notes

### Evolving Your Pillars

Your pillars can change as you grow:
- Add new pillars gradually
- Retire pillars that don't resonate
- Let audience feedback guide you
- Stay true to your core brand

🔥 **Action Step**: Define your 3-5 content pillars. List 10 content ideas under each pillar.`
      },
      {
        id: 6,
        title: "Brand Consistency Across Platforms",
        duration: "15 min",
        overview: "Maintain your brand identity while adapting to different platforms. Learn platform-specific optimization techniques.",
        keyTakeaways: [
          "Platform-specific adaptations",
          "Cross-promotion strategies",
          "Maintaining core brand elements"
        ],
        content: `## One Brand, Multiple Platforms

Your brand should be recognizable everywhere while respecting each platform's unique culture.

### Core vs Flexible Elements

**Keep Consistent (Core)**:
- Your voice and personality
- Color palette
- Values and messaging
- Profile photo
- Core content themes

**Adapt (Flexible)**:
- Content format and length
- Posting frequency
- Tone and formality
- Platform-specific features
- Trending participation

### Platform-Specific Adaptations

**TikTok/Short-Form**:
- Casual, energetic
- Trend participation
- Quick hooks
- Native sounds

**YouTube**:
- More polished production
- Longer, deeper content
- SEO-optimized titles
- Thumbnail importance

**Twitter/X**:
- Concise, witty
- Conversation-focused
- Thread potential
- Real-time engagement

**Instagram**:
- Visual-first
- Aesthetic consistency
- Stories for casual
- Reels for reach

**LinkedIn**:
- Professional tone
- Industry insights
- Thought leadership
- Career-related content

### Cross-Promotion Strategies

**Repurposing Content**:
- Long video → Short clips
- Blog → Thread → Carousel
- Podcast → Audiograms
- Stats → Graphics

**Platform Funneling**:
- Tease on one platform
- Full content on another
- "Link in bio for more"
- Platform-specific incentives

**Cohesive Campaigns**:
- Same message, different formats
- Coordinated launch timing
- Platform-specific CTAs

### Maintaining Recognition

Even when adapting:
- Use consistent username
- Same profile photo
- Include brand colors
- Signature phrases
- Similar bio messaging

### The 80/20 Rule

**80% Platform-Native**:
Content that feels natural to the platform

**20% Cross-Platform**:
Repurposed or consistent brand content

### Managing Multiple Platforms

**Start with one**: Master it before expanding
**Add gradually**: One new platform at a time
**Prioritize**: Know your main platform
**Batch create**: Make content for all platforms at once
**Use tools**: Scheduling, analytics, management

### Platform Priority Matrix

Rank platforms by:
1. Where your audience is
2. What format suits your content
3. Your time investment
4. Growth potential

Don't be everywhere—be impactful somewhere.

🔥 **Action Step**: Audit your presence across platforms. Ensure profile consistency and plan one piece of repurposed content this week.`
      }
    ]
  },

  103: {
    id: 103,
    title: "Engagement Secrets",
    description: "Timing, hashtags, community building, and algorithm mastery",
    longDescription: "Engagement is the lifeblood of content success. Go beyond views to build a community that actively participates. Learn the technical and psychological strategies that turn passive viewers into active fans.",
    totalDuration: "3 hours",
    level: 1,
    badge: "Engagement Pro",
    prerequisites: ["Content That Connects"],
    learningOutcomes: [
      "Master platform algorithms and optimize for reach",
      "Build genuine community through engagement strategies",
      "Use data to optimize posting times and content types",
      "Create content that sparks conversation and shares"
    ],
    lessons: [
      {
        id: 1,
        title: "Understanding the Algorithm",
        duration: "20 min",
        overview: "Demystify how content gets distributed. Learn the key signals algorithms use to decide what content to promote.",
        keyTakeaways: [
          "Key ranking factors",
          "Watch time vs engagement",
          "The velocity effect"
        ],
        content: `## How Algorithms Actually Work

Algorithms aren't magic or conspiracy—they're systems designed to show users content they'll engage with. Understanding them gives you a massive advantage.

### The Core Purpose

Every social algorithm has one job: **keep users on the platform longer**.

Content that achieves this gets promoted. Content that doesn't gets buried.

### Key Ranking Factors

**1. Watch Time / Dwell Time**
How long do people spend with your content?
- 100% completion rate = strong signal
- Rewatches = even stronger
- Quick scrolls = negative signal

**2. Engagement Velocity**
How quickly does your content get engagement after posting?
- First 30-60 minutes are critical
- Fast likes/comments = "this is hot"
- Slow engagement = "this is cold"

**3. Engagement Quality**
Not all engagement is equal:
- Shares > Saves > Comments > Likes
- Long comments > short comments
- New followers from content = gold

**4. Completion Signals**
- Watch to end
- Click "see more"
- Tap on profile after viewing

### The Velocity Effect

The algorithm tests your content on small audiences first:
- Show to 200-500 followers
- Measure engagement rate
- If strong, expand to 1000+
- If weak, limit distribution

This is why early engagement is crucial.

### Watch Time vs Engagement

**Watch Time**: How long people watch
- Best for: story content, tutorials, entertainment
- Optimize: hooks, pacing, payoffs

**Engagement**: Actions people take
- Best for: controversial, question-based, community content
- Optimize: CTAs, conversation starters, shareable moments

The best content maximizes both.

### What Gets Suppressed

Algorithms actively limit:
- Watermarks from other platforms
- Engagement bait ("Like if you agree!")
- Low-resolution content
- Duplicate/reposted content
- Links in captions (sometimes)

🔥 **Action Step**: Check your last 10 posts. Calculate average watch time and engagement rate. Find patterns in your top performers.`
      },
      {
        id: 2,
        title: "Optimal Posting Strategy",
        duration: "15 min",
        overview: "Timing matters. Learn to analyze your audience and find the perfect posting windows for maximum reach.",
        keyTakeaways: [
          "Analyzing audience activity",
          "Time zone considerations",
          "Posting frequency optimization"
        ],
        content: `## Timing is Everything

The same content posted at different times can have wildly different results. Find your optimal windows.

### Why Timing Matters

**The Velocity Factor**
Early engagement signals quality to the algorithm. Post when your audience is active.

**The Competition Factor**
Peak times have more viewers but also more competition. Off-peak can mean less competition.

### Finding Your Audience's Schedule

**Use Platform Analytics**
- Most platforms show when followers are online
- Look for peaks and patterns
- Note day-of-week variations

**Test and Measure**
- Post similar content at different times
- Track performance by time slot
- Build your own data set

**Common Patterns**:
- Morning commute (7-9 AM)
- Lunch break (12-1 PM)
- Evening wind-down (7-10 PM)
- Late night scrolling (10 PM-12 AM)

### Time Zone Considerations

**Know Your Core Audience**
- Where are most of your followers?
- What time zone dominates?
- International considerations?

**Multi-Region Strategy**
- Primary post for main time zone
- Reshares/Stories for other regions
- Consider regional content variations

### Posting Frequency

**The Sweet Spots**:
- TikTok: 1-4 times per day
- Instagram: 1-2 times per day
- YouTube: 1-3 times per week
- Twitter/X: 3-10 times per day

**Quality Over Quantity**
- 1 great post > 5 mediocre posts
- Consistency > volume
- Don't burn out chasing frequency

### The Consistency Factor

Algorithms reward consistent posting:
- Same time slots build habits
- Followers know when to expect you
- Algorithms learn your pattern

But don't be a slave to schedule:
- Skip a post if quality isn't there
- Trend opportunities trump schedule
- Your mental health matters

### Advanced: Content-Time Matching

Different content types perform at different times:
- Educational: Weekday mornings/lunch
- Entertainment: Evenings/weekends
- Motivational: Monday mornings
- Personal: Evenings when people relax

🔥 **Action Step**: Analyze your top 10 posts. What times/days were they posted? Find your golden windows.`
      },
      {
        id: 3,
        title: "Hashtag Mastery",
        duration: "20 min",
        overview: "Use hashtags strategically, not randomly. Learn research techniques and the perfect hashtag mix for discoverability.",
        keyTakeaways: [
          "Hashtag research tools",
          "The 30/30/30/10 mix strategy",
          "Branded hashtag creation"
        ],
        content: `## Strategic Hashtag Use

Hashtags are discovery tools, not magic. Use them strategically to reach new audiences.

### How Hashtags Actually Work

**Categorization**: Hashtags tell the algorithm what your content is about
**Discovery**: Users browse hashtags to find content
**Communities**: Hashtags connect niche communities

### The 30/30/30/10 Mix Strategy

Use a balanced mix of hashtag sizes:

**30% Large (1M+ posts)**
- High competition, broad reach
- Examples: #fitness #travel #food
- Get occasional lucky breaks

**30% Medium (100K-1M posts)**
- Moderate competition
- More targeted audiences
- Better chance to rank

**30% Small (10K-100K posts)**
- Low competition
- Highly targeted
- Easier to get featured

**10% Micro (<10K posts)**
- Your niche community
- Branded hashtags
- Super targeted

### Research Tools and Techniques

**Native Search**
- Type keywords, see suggestions
- Check post counts
- Browse recent posts

**Competitor Analysis**
- What hashtags do top creators use?
- Which seem to perform well?
- Note patterns

**Tools**:
- Later.com hashtag suggestions
- Display Purposes
- All Hashtag generator

### Hashtag Research Process

1. Brainstorm 50+ relevant tags
2. Check size/competition for each
3. Group by size category
4. Test combinations
5. Track performance
6. Refine over time

### Creating Branded Hashtags

**Your Personal Tag**
- Unique to you (#YourNameCreates)
- Use on all content
- Encourage fans to use it

**Campaign Tags**
- For specific series (#30DayChallenge)
- Time-limited
- Community participation

### Platform-Specific Notes

**Instagram**: Up to 30 (use 20-25 strategic ones)
**TikTok**: 3-5 highly relevant
**Twitter/X**: 2-3 maximum
**YouTube**: Include in description, not title

### Common Mistakes

- Using banned/spammy hashtags
- Same hashtags every post (algorithmic penalty)
- Irrelevant popular hashtags
- Only using huge hashtags

🔥 **Action Step**: Research 50 hashtags in your niche. Categorize them by size. Create 5 different hashtag combinations to test.`
      },
      {
        id: 4,
        title: "Comments That Convert",
        duration: "15 min",
        overview: "Turn comments into community. Learn response strategies that build relationships and encourage more engagement.",
        keyTakeaways: [
          "Response timing and prioritization",
          "Conversation starters",
          "Handling negative comments"
        ],
        content: `## The Power of Comment Engagement

Comments are conversations. How you handle them determines whether viewers become fans.

### Why Comments Matter

**Algorithm Signals**
- Comments show engagement
- Your replies count as comments too
- Conversations boost content reach

**Community Building**
- Personal connection
- Loyalty development
- Word-of-mouth growth

### Response Timing

**The Golden Hour**
Reply to comments in the first hour:
- Shows you're active
- Encourages more comments
- Boosts algorithmic performance

**Sustainable Approach**
- Set 2-3 reply sessions per day
- 15-30 minutes each
- Prioritize quality over quantity

### Prioritization Framework

**Always Reply To**:
- Questions (especially good ones)
- Thoughtful comments
- First-time commenters
- Influential accounts

**Acknowledge With Likes**:
- Simple positive reactions
- Generic compliments
- Emoji-only comments

### Conversation Starters

**Turn Statements Into Conversations**:

Instead of: "Thanks!"
Try: "Thanks! What part resonated with you most?"

Instead of: "Glad you liked it!"
Try: "So glad! Are you dealing with this challenge too?"

**Ask Follow-Up Questions**
- "What's been your experience?"
- "Have you tried this?"
- "What would you add?"

### Handling Negative Comments

**Constructive Criticism**
- Thank them for feedback
- Consider if valid
- Explain your perspective calmly

**Trolls and Haters**
- Don't feed them
- Delete if genuinely harmful
- Block repeat offenders
- Sometimes humor works

**Controversial Topics**
- Stay calm and professional
- Clarify if misunderstood
- Know when to disengage

### Creating Commentable Content

Design your content to spark comments:
- Ask questions in your content
- Leave things debatable
- Request opinions
- Create "tag a friend who..." moments

### Pinned Comments Strategy

Pin comments that:
- Add value to the content
- Ask questions you want answered
- Feature community members
- Drive to CTAs

🔥 **Action Step**: Spend 30 minutes replying to your most recent comments using conversation-starting techniques.`
      },
      {
        id: 5,
        title: "Creating Shareable Content",
        duration: "20 min",
        overview: "Design content that people want to share. Understand the psychology of sharing and create for it.",
        keyTakeaways: [
          "Share triggers",
          "Meme-able moments",
          "Collaborative content ideas"
        ],
        content: `## The Science of Sharing

Shares are the ultimate engagement. When someone shares your content, they're vouching for you to their audience.

### Why People Share

**Social Currency**
"This makes me look good"
- Insider knowledge
- Being first to share
- Showing good taste

**Identity Expression**
"This is who I am"
- Values alignment
- Group belonging
- Self-expression

**Utility**
"This helps others"
- Practical tips
- Important information
- Saving for later

**Emotion**
"I need to process this"
- Strong reactions
- Relatable moments
- Emotional release

### Creating Share Triggers

**The "So True" Effect**
Content that makes people think "finally someone said it"
- Relatable struggles
- Unpopular opinions
- Shared experiences

**The "This Is Useful" Effect**
Content people want to reference later
- Tips and tutorials
- Lists and frameworks
- Resources and tools

**The "You Need To See This" Effect**
Content too good not to share
- Incredible skill
- Shocking revelation
- Peak humor

### Meme-able Moments

Create content that's easy to remix:
- Reaction-worthy moments
- Quotable lines
- Recognizable formats
- Templates people can use

**Encourage Remixes**
- Duet-friendly content
- Stitch opportunities
- Challenge formats

### Collaborative Content

Content that involves your audience:
- User-submitted content
- Community challenges
- Collaborative projects
- Crowd-sourced ideas

**The Tag Dynamic**
Create content people want to tag friends in:
- "Tag someone who needs this"
- Couple content, friend content
- Specific scenarios

### Format Optimization for Shares

**Easy to Consume**
- Clear and quick value
- Skimmable format
- Strong visual hook

**Easy to Share**
- Standalone context (no need to explain)
- Not too long
- Clear value proposition

### Testing Shareability

Before posting, ask:
- Would I share this?
- Who would share this?
- Why would they share it?
- What would they say when sharing?

🔥 **Action Step**: Analyze your most-shared content. Identify the share trigger in each. Plan 3 new pieces designed for shareability.`
      },
      {
        id: 6,
        title: "Building Community Rituals",
        duration: "15 min",
        overview: "Create recurring elements that your community looks forward to. Build traditions that strengthen bonds.",
        keyTakeaways: [
          "Weekly series concepts",
          "Community challenges",
          "Inside jokes and references"
        ],
        content: `## Rituals Create Loyalty

Communities are built on shared experiences. Create rituals that your audience anticipates and participates in.

### Why Rituals Work

**Anticipation**: People look forward to recurring elements
**Belonging**: Participating creates group identity
**Habit**: Regular rituals become part of their routine
**Memory**: Rituals create shared memories

### Types of Community Rituals

**Weekly Series**
- Same topic every week
- Dedicated day and time
- Clear naming (#MondayMotivation)

**Community Challenges**
- Time-limited activities
- Shared hashtag
- Progress sharing

**Interactive Formats**
- Q&A sessions
- AMAs
- Community polls

**Celebrations**
- Milestone acknowledgments
- Member spotlights
- Achievement celebrations

### Creating a Weekly Series

**Pick Your Day**
Choose a day that works:
- Aligned with your schedule
- When audience is active
- Not oversaturated by others

**Name It Memorably**
- Alliteration works (#TuesdayTips)
- Clear purpose
- Easy to remember

**Commit and Execute**
- At least 8-12 weeks minimum
- Same format each time
- Build anticipation

### Community Challenges

**Structure**:
- Clear rules and timeline
- Easy entry point
- Shareable participation
- Recognition for participants

**Examples**:
- 30-day challenges
- Weekly submissions
- Creative prompts
- Skill-building journeys

### Inside Jokes and References

**How They Form**:
- Memorable moments from past content
- Running gags
- Community-created terms
- Callback references

**Why They Matter**:
- Create in-group feeling
- Reward loyal followers
- Make community distinctive

**How to Cultivate**:
- Reference past moments
- Embrace organic jokes
- Let community name things
- Create recurring characters/themes

### Spotlight Rituals

Regularly featuring community members:
- Comment of the week
- Fan art features
- Transformation spotlights
- Question features

This encourages participation and shows you value the community.

### Documenting Rituals

Keep track of:
- What rituals you've established
- Their performance metrics
- Community response
- Evolution over time

🔥 **Action Step**: Design one weekly ritual for your community. Plan the first 4 weeks of content for it.`
      },
      {
        id: 7,
        title: "Collaborations and Duets",
        duration: "20 min",
        overview: "Leverage other creators to grow. Learn collaboration etiquette and strategies that benefit everyone.",
        keyTakeaways: [
          "Finding collaboration partners",
          "Pitch templates that work",
          "Win-win collaboration structures"
        ],
        content: `## Growing Through Collaboration

Collaborations expose you to new audiences. Done right, everyone wins. Done wrong, you burn bridges.

### Why Collaborations Work

**Audience Sharing**: Both creators' audiences see the content
**Credibility Transfer**: Association with respected creators
**Content Variety**: Fresh perspectives for your audience
**Relationship Building**: Network expansion

### Finding the Right Partners

**Ideal Collaboration Criteria**:
- Similar audience size (within 2-3x)
- Complementary content (not identical)
- Aligned values and tone
- Mutual benefit potential

**Where to Find Partners**:
- Your comment section (active engagers)
- Niche community spaces
- Creator networking events
- Direct outreach

### The Collaboration Pitch

**What to Include**:
1. Genuine appreciation of their work
2. Who you are (brief)
3. The idea (specific)
4. Why it benefits them
5. Easy next step

**Example Pitch**:
"Hey [Name]! Been loving your content on [specific topic]. I'm [brief intro]. I have an idea for a collab that I think our audiences would love: [specific idea]. I think this works because [mutual benefit]. Would you be open to a quick chat?"

### Collaboration Formats

**For Video Platforms**:
- Duets/Stitches (easiest)
- Split-screen challenges
- Takeovers
- Joint live streams
- Series collaborations

**For All Platforms**:
- Guest posts
- Interviews
- Joint challenges
- Cross-promotions

### Win-Win Structures

**Equal Value Exchange**:
- Similar promotion effort
- Comparable production contribution
- Fair credit and exposure

**Clear Agreements**:
- What each person does
- When/where it posts
- How to credit each other
- Cross-promotion expectations

### Collaboration Etiquette

**Do**:
- Be professional and reliable
- Communicate clearly
- Promote as agreed
- Give proper credit
- Follow through on commitments

**Don't**:
- Ghost or flake
- Over-promise and under-deliver
- Steal ideas or content
- Make it all about you
- Forget to promote their version

### After the Collaboration

- Thank them publicly and privately
- Share performance results
- Discuss future opportunities
- Maintain the relationship

🔥 **Action Step**: Identify 5 potential collaboration partners. Draft a personalized pitch for each.`
      },
      {
        id: 8,
        title: "Trend Surfing",
        duration: "15 min",
        overview: "Ride trends while maintaining authenticity. Learn to spot trends early and adapt them to your brand.",
        keyTakeaways: [
          "Trend discovery sources",
          "Speed vs quality balance",
          "Brand-aligned trend adaptation"
        ],
        content: `## Riding the Wave

Trends offer massive reach potential. The key is participating authentically and quickly.

### Why Trends Matter

**Algorithmic Boost**: Platforms push trending content
**Discovery**: New audiences searching for trends
**Relevance**: Shows you're current and engaged
**Community**: Shared cultural moments

### Trend Discovery Sources

**On Platform**:
- Discover/Explore pages
- Trending sounds
- Popular hashtags
- For You/Recommended

**Off Platform**:
- Twitter for breaking trends
- Reddit for emerging topics
- Google Trends for search trends
- Pop culture news

**Community Sources**:
- What are other creators in your niche doing?
- What's your audience sharing?
- Trend tracking accounts

### Speed vs Quality Balance

**The Trend Lifecycle**:
1. Emerging (best time to join)
2. Growing (still good)
3. Peak (saturated)
4. Declining (too late)

**Speed Matters** because:
- Early adopters get more reach
- Less competition initially
- More likely to be featured

**Quality Still Matters** because:
- Bad execution hurts your brand
- Low-quality trend content is noise
- Your reputation > trend reach

### Brand-Aligned Adaptation

**The Niche Twist**
Don't just copy—adapt to your brand:
- Use trending sound, your topic
- Trending format, your expertise
- Trending challenge, your take

**What Makes a Good Trend Fit**:
- Aligns with your values
- Makes sense for your audience
- You can add unique perspective
- Doesn't feel forced

**When to Skip a Trend**:
- Conflicts with your brand
- You can't do it well
- It's already dying
- It doesn't resonate with your audience

### Trend Participation Framework

1. **Spot**: Find the trend early
2. **Evaluate**: Does it fit your brand?
3. **Adapt**: How can you make it yours?
4. **Create**: Produce quickly but well
5. **Post**: Timing is crucial
6. **Engage**: Ride the wave of engagement

### Creating Your Own Trends

Advanced strategy:
- Create unique formats
- Start community challenges
- Develop signature sounds/phrases
- Inspire remixes

🔥 **Action Step**: Find 3 current trends. Practice adapting each to your niche. Post the strongest one today.`
      },
      {
        id: 9,
        title: "Analytics Deep Dive",
        duration: "20 min",
        overview: "Move beyond surface metrics. Learn to extract actionable insights from your analytics.",
        keyTakeaways: [
          "Advanced metric analysis",
          "Cohort analysis",
          "Predictive patterns"
        ],
        content: `## Beyond Vanity Metrics

Views and likes feel good, but deeper metrics tell you what's actually working and why.

### The Metrics Hierarchy

**Vanity Metrics** (feel good, less actionable):
- Total views
- Total followers
- Like counts

**Engagement Metrics** (better):
- Engagement rate
- Save rate
- Share rate
- Comment quality

**Business Metrics** (best):
- Follower conversion
- Link clicks
- Revenue per view

### Advanced Metric Analysis

**Retention Curves**
Where do people drop off?
- Sharp early drop = weak hook
- Gradual middle drop = pacing issues
- End drop = weak payoff

**Engagement Distribution**
- Which content types get shares vs saves vs comments?
- What correlates with follower growth?

**Traffic Sources**
- Where are views coming from?
- Hashtags, sounds, For You, shares?
- Double down on working sources

### Cohort Analysis

Compare performance across groups:

**By Time**:
- How does content from this month compare to last?
- Are you improving?

**By Type**:
- Tutorials vs entertainment vs personal
- Which type drives what goal?

**By Topic**:
- Which content pillars perform best?
- What should you do more/less of?

### Finding Predictive Patterns

**Identify Leading Indicators**:
- Early metrics that predict final performance
- Example: 30-minute engagement predicts 24-hour performance

**Build Your Playbook**:
- When X happens, do Y
- When content hits Z threshold in 1 hour, boost it
- When performance is low, adjust strategy

### The Weekly Review Process

Every week, answer:
1. What were my top 3 performing pieces?
2. What do they have in common?
3. What were my bottom 3?
4. What can I learn?
5. What will I do differently next week?

### Monthly Deep Dives

Monthly, analyze:
- Overall growth trends
- Engagement rate changes
- Content mix performance
- Audience demographics shifts
- Revenue and conversion data

### Tools for Analysis

- Native platform analytics
- Spreadsheet tracking
- Third-party tools (Later, Hootsuite)
- Custom dashboards

### Actionable Insights

Turn data into action:
- "Videos under 30 seconds get 2x engagement" → Make shorter content
- "Posts at 7 PM get more shares" → Shift posting time
- "Tutorial content drives follows" → Create more tutorials

🔥 **Action Step**: Export your last 30 days of analytics. Create a simple spreadsheet tracking your key metrics. Find one actionable insight.`
      },
      {
        id: 10,
        title: "Engagement Automation",
        duration: "20 min",
        overview: "Scale your engagement without losing authenticity. Tools and techniques for managing growing communities.",
        keyTakeaways: [
          "Engagement scheduling",
          "Community management tools",
          "Delegation strategies"
        ],
        content: `## Scaling Your Presence

As you grow, personal engagement becomes a time challenge. Scale smartly without losing authenticity.

### The Scaling Challenge

**The Paradox**:
- Engagement grows your audience
- Larger audience = more engagement needed
- Eventually, you can't reply to everyone

**The Goal**:
Maintain the feeling of personal connection while serving more people efficiently.

### What to Automate (and What Not To)

**Safe to Automate**:
- Post scheduling
- Analytics collection
- Content cross-posting
- DM auto-responses for FAQs

**Never Automate**:
- Personal replies (use real words)
- Relationship building
- Genuine conversations
- Community crisis response

### Engagement Scheduling

**Batched Engagement Sessions**:
- Set specific times for engagement
- 3x per day for 15-30 minutes
- Focus > scattered attention

**The Reply Stack**:
- Morning: Reply to overnight comments
- Midday: Engage with others' content
- Evening: Reply to day's comments

### Community Management Tools

**For Organization**:
- Comment tagging/filtering
- DM categorization
- Saved replies for common questions

**For Analytics**:
- Engagement tracking
- Response time monitoring
- Sentiment analysis

**Popular Tools**:
- Creator Studio (Meta)
- TubeBuddy (YouTube)
- Social management platforms

### Building a Moderation Team

When to get help:
- Comments exceed personal capacity
- Hateful/spam comments increase
- You're spending too much time on moderation

**Moderator Responsibilities**:
- Filter inappropriate comments
- Flag important comments for you
- Answer routine questions
- Enforce community guidelines

### Saved Responses (Done Right)

**Templates Are Starting Points**:
- Save common response frameworks
- Personalize before sending
- Add specific details each time

**Example**:
Template: "Thanks so much for sharing your experience! [Personalization]. Keep up the great work!"
Used: "Thanks so much for sharing your experience! Sounds like you've really made progress with the morning routine. Keep up the great work!"

### Delegation Strategies

**What to Delegate First**:
- Moderation
- Analytics reporting
- Content scheduling
- Research and trend spotting

**What to Keep Personal**:
- Content creation
- Key relationship responses
- Strategic decisions
- Community vision

### Maintaining Authenticity at Scale

- Regular "real" interactions
- Personal stories in content
- Acknowledgment of growth
- Transparency about team

### Congratulations!

You've completed "Engagement Secrets"!

You now understand:
- How algorithms really work
- Optimal timing and hashtag strategies
- How to build genuine community
- Collaboration and trend tactics
- Data-driven optimization
- Scaling without losing authenticity

🔥 **Final Action Step**: Implement one new engagement strategy from each lesson this week. Track the impact.`
      }
    ]
  },

  104: {
    id: 104,
    title: "Going Live",
    description: "Streaming tips, audience interaction, and live monetization",
    longDescription: "Live streaming creates unmatched connection with your audience. Master the art of going live, from technical setup to real-time audience engagement, and learn how to monetize your live presence effectively.",
    totalDuration: "2 hours",
    level: 1,
    badge: "Live Expert",
    prerequisites: ["Building Your Brand"],
    learningOutcomes: [
      "Set up professional-quality live streams on any budget",
      "Engage audiences in real-time with confidence",
      "Handle technical issues and challenging situations live",
      "Monetize live content through multiple revenue streams"
    ],
    lessons: [
      {
        id: 1,
        title: "Live Streaming Setup",
        duration: "20 min",
        overview: "Get your technical setup right. From lighting to audio to streaming software, build a professional stream.",
        keyTakeaways: [
          "Essential equipment checklist",
          "Streaming software options",
          "Optimal settings and bitrates"
        ],
        content: `## Building Your Live Stream Setup

A good stream setup doesn't require expensive equipment. It requires smart choices and proper configuration.

### Essential Equipment Checklist

**Minimum Viable Setup (Phone)**:
- Smartphone with good camera
- Ring light or window light
- Phone mount/tripod
- Earbuds with microphone
- Stable internet connection

**Upgraded Setup (Webcam)**:
- HD webcam (Logitech C920 or similar)
- USB microphone (Blue Yeti, Audio-Technica)
- Key light + fill light
- Green screen (optional)
- Second monitor for chat

**Pro Setup**:
- DSLR/mirrorless as webcam
- XLR microphone with interface
- 3-point lighting
- Stream deck
- Capture card

### Streaming Software Options

**Mobile Streaming**:
- Platform native apps (simplest)
- Streamlabs mobile
- Prism Live

**Desktop Streaming**:
- OBS Studio (free, powerful)
- Streamlabs Desktop (beginner-friendly)
- XSplit (Windows only)

### OBS Quick Start

1. Download OBS Studio (free)
2. Run auto-configuration wizard
3. Add video source (webcam)
4. Add audio source (microphone)
5. Test before going live

### Optimal Settings

**Resolution**: 1080p if internet allows, 720p for stability
**Bitrate**: 4500-6000 kbps for 1080p, 2500-4000 for 720p
**Frame Rate**: 30fps (60fps for gaming)
**Encoder**: Hardware if available (NVENC, AMD VCE)

### Internet Requirements

**Minimum**: 10 Mbps upload
**Recommended**: 20+ Mbps upload
**Best Practice**: Use ethernet, not WiFi

### Audio Is Critical

Poor audio kills streams faster than poor video:
- Position mic 6-12 inches from mouth
- Use noise gate to cut background noise
- Add slight compression for consistent levels
- Test recording before going live

🔥 **Action Step**: Set up OBS and do a 5-minute test stream (private). Record it and review for issues.`
      },
      {
        id: 2,
        title: "Pre-Stream Preparation",
        duration: "15 min",
        overview: "Preparation prevents panic. Create checklists and routines that ensure smooth broadcasts every time.",
        keyTakeaways: [
          "Pre-stream checklist template",
          "Content planning for lives",
          "Energy and mindset preparation"
        ],
        content: `## The Pre-Stream Ritual

Consistent preparation leads to consistent quality. Build routines that make every stream smooth.

### Pre-Stream Checklist Template

**1 Hour Before**:
- [ ] Check internet speed
- [ ] Close unnecessary programs
- [ ] Test camera and lighting
- [ ] Test audio levels
- [ ] Review content outline
- [ ] Hydrate and snack

**15 Minutes Before**:
- [ ] Open OBS/streaming software
- [ ] Check all scenes work
- [ ] Load overlays and alerts
- [ ] Open chat window
- [ ] Phone on silent
- [ ] "Going live soon" post

**At Go-Live**:
- [ ] Final audio check
- [ ] Camera positioned
- [ ] Energy check (smile!)
- [ ] Hit "Start Streaming"

### Content Planning for Lives

**Have a Structure**:
- Opening hook (first 2-3 minutes)
- Main content segments
- Interactive breaks
- Closing and call-to-action

**Prepare Talking Points**:
- Not a full script (too rigid)
- Bullet points to hit
- Questions to ask audience
- Backup topics if needed

**Visual Preparation**:
- Graphics/overlays ready
- Any demos prepped
- Links you'll share

### Energy and Mindset

**Physical Prep**:
- Eat something (not too heavy)
- Avoid caffeine crash timing
- Quick stretch/movement
- Vocal warmup

**Mental Prep**:
- Clear your head (quick meditation)
- Review goals for the stream
- Positive visualization
- Remember: mistakes are okay

### The "Buffer"

Start your stream 5 minutes early:
- Greet early arrivers
- Let late joiners settle in
- Build energy naturally
- Test everything one more time

### Common Pre-Stream Mistakes

- Not testing audio (sounds terrible)
- Cluttered background (distracting)
- Poor lighting (unflattering)
- No water nearby (voice cracks)
- Phone notifications on (embarrassing)

🔥 **Action Step**: Create your personal pre-stream checklist. Laminate it or keep it visible.`
      },
      {
        id: 3,
        title: "Real-Time Engagement",
        duration: "20 min",
        overview: "Keep viewers engaged and entertained. Master the skills of reading chat, shoutouts, and interactive elements.",
        keyTakeaways: [
          "Chat reading techniques",
          "Shoutout strategies",
          "Interactive games and polls"
        ],
        content: `## Mastering Live Engagement

The magic of live content is real-time interaction. Make every viewer feel seen.

### Chat Reading Techniques

**The Scan Method**:
- Glance at chat every 30-60 seconds
- Pick 2-3 messages to respond to
- Acknowledge others with quick reactions
- Don't try to read everything

**Prioritization**:
1. Questions about your topic
2. New viewers saying hello
3. Regular supporters
4. General comments

**Reading Out Loud**:
- Always repeat the question/comment before answering
- Use the person's name
- Make eye contact with camera while responding

### Shoutout Strategies

**New Viewers**:
"Welcome [name]! Great to have you here!"

**Regulars**:
"Hey [name], good to see you again! How's [something you remember about them]?"

**Tippers/Supporters**:
"Thank you so much [name] for the support! Really appreciate you."

**Avoid**:
- Over-thanking (gets awkward)
- Ignoring messages (feels exclusive)
- Playing favorites too obviously

### Interactive Elements

**Polls**:
- Ask opinions on topics
- Let audience choose what happens next
- Use platform native poll features

**Q&A Sessions**:
- Dedicated segments for questions
- Use question queuing
- Circle back to unanswered questions

**Games**:
- Trivia about your topic
- Guessing games
- Chat challenges

**Call-and-Response**:
- "Type [X] if you agree!"
- "Drop your [question] in chat"
- "Who here has experienced [thing]?"

### Maintaining Energy

**Pace Yourself**:
- High energy ≠ constant screaming
- Vary your intensity
- Have calm moments too

**Camera Presence**:
- Look at the camera (not yourself)
- Use hand gestures
- Express with your face
- Move naturally

### When Chat Is Slow

- Ask open-ended questions
- Tell a story
- Share behind-the-scenes info
- Address the quiet directly: "Chat's quiet—what are you all up to today?"

🔥 **Action Step**: Practice reading chat while talking. Have someone send you messages while you record a practice video.`
      },
      {
        id: 4,
        title: "Handling Live Challenges",
        duration: "15 min",
        overview: "Things go wrong. Learn to handle technical issues, trolls, and awkward moments with grace.",
        keyTakeaways: [
          "Technical troubleshooting live",
          "Moderator management",
          "Recovering from mistakes"
        ],
        content: `## Graceful Problem Solving

Every streamer faces challenges. How you handle them defines your professionalism.

### Technical Troubleshooting Live

**Audio Issues**:
- Check if muted (common mistake)
- Switch audio sources
- Ask chat "Can you hear me?"
- Have backup mic ready

**Video Issues**:
- Check camera connection
- Adjust lighting on the fly
- Switch to backup camera/phone
- Go audio-only briefly if needed

**Connection Issues**:
- Have "Technical Difficulties" scene ready
- Acknowledge and apologize briefly
- Don't over-explain
- Restart stream if necessary

**The Magic Phrase**:
"We're having some technical difficulties. Give me just a moment..."
(Use this time to troubleshoot)

### Managing Moderators

**Why You Need Mods**:
- Can't watch chat while engaging
- Remove toxic comments quickly
- Answer basic questions
- Enforce rules consistently

**How to Find Mods**:
- Loyal community members
- Friends who watch regularly
- Experienced mods from other channels

**Mod Guidelines**:
- What to delete immediately
- What to timeout
- What to ban
- When to escalate to you

### Handling Trolls

**Ignore First**:
Many trolls leave when not fed attention

**Timeout/Ban**:
Have mods handle quietly when possible

**Address Directly** (rarely):
Only if it's affecting other viewers. Be brief and move on.

**The Calm Response**:
"That's not the vibe we're going for here. Moving on..."

### Recovering From Mistakes

**You Said Something Wrong**:
- Correct yourself simply
- Don't over-apologize
- Move on quickly

**Awkward Silence**:
- Acknowledge it with humor
- "Well that was a moment..."
- Have backup topics ready

**Equipment Failure**:
- Stay calm (viewers feel your energy)
- Be honest about what's happening
- Either fix it or end gracefully

### The "Never Do" List

- Never argue with trolls extensively
- Never show personal information
- Never panic visibly
- Never badmouth other creators
- Never promise what you can't deliver

🔥 **Action Step**: Create a "Technical Issues" scene in OBS with a "We'll be right back" message.`
      },
      {
        id: 5,
        title: "Building a Stream Schedule",
        duration: "15 min",
        overview: "Consistency builds audiences. Create a streaming schedule that works for you and your viewers.",
        keyTakeaways: [
          "Finding your time slots",
          "Promoting upcoming streams",
          "Handling schedule changes"
        ],
        content: `## Consistency is Key

Regular streaming schedules train your audience to show up. Inconsistency loses them.

### Finding Your Time Slots

**Consider Your Life**:
- When can you consistently be available?
- What times work with your energy levels?
- What commitments are non-negotiable?

**Consider Your Audience**:
- When are they active?
- Time zones of your core viewers
- Competition at different times

**Consider the Platform**:
- When is the platform busiest?
- When is competition lowest?
- Discovery opportunities

**Start Simple**:
- Begin with 1-2 streams per week
- Same days and times
- Build up gradually

### Promoting Upcoming Streams

**On-Platform**:
- Schedule announcements
- Go-live notifications
- "See you tomorrow" at end of streams

**Off-Platform**:
- Social media posts
- Community Discord
- Email newsletter
- Calendar invites for VIPs

**Promotion Timeline**:
- 1 week before: Initial announcement
- 1 day before: Reminder
- 1 hour before: Final push
- At stream start: "We're live!" posts

### Creating a Schedule Graphic

Visual schedules work:
- Clear days and times
- Your time zone specified
- What type of content each day
- Shareable format

### Handling Schedule Changes

**Planned Changes**:
- Announce early (1 week+)
- Explain briefly
- Offer alternative if possible

**Emergency Cancellations**:
- Communicate ASAP
- Don't over-explain
- Reschedule if possible

**Vacation/Breaks**:
- Announce in advance
- Give return date
- Consider pre-recorded content

### The Sustainable Schedule

**Avoid Burnout**:
- Don't stream every day (at first)
- Quality over quantity
- Have buffer between streams
- Take planned breaks

**Ramp Up Gradually**:
- Month 1-2: 2 streams/week
- Month 3-4: 3 streams/week
- Month 6+: Evaluate what's sustainable

### Dealing With Low Viewership

Early streams may have few viewers:
- Stream as if 1000 people are watching
- Focus on building habit
- Every viewer is valuable
- Content gets better with practice

🔥 **Action Step**: Block out your ideal streaming times for the next month. Commit to at least 8 streams.`
      },
      {
        id: 6,
        title: "Live Monetization Strategies",
        duration: "20 min",
        overview: "Turn live viewers into revenue. From tips to sponsorships, learn multiple ways to monetize your streams.",
        keyTakeaways: [
          "Tip incentives and goals",
          "Sponsor integration in lives",
          "Exclusive live content"
        ],
        content: `## Making Money While Live

Live content offers unique monetization opportunities. Real-time interaction = real-time revenue.

### Direct Viewer Support

**Tips/Donations**:
- Platform built-in (varies by platform)
- Third-party (StreamElements, Streamlabs)
- Crypto tips (on Lumina!)

**Making Tips Flow**:
- Acknowledge every tip genuinely
- Don't beg or guilt-trip
- Create tip incentives (see below)
- Set transparent goals

### Tip Incentives and Goals

**Stream Goals**:
- "At $X, I'll do [special thing]"
- Visible progress bar
- Celebrate milestones

**Tip Menu**:
- $5: Answer a question
- $10: Do a challenge
- $25: Shoutout on social media
- $50: Song/game request

**Wheel Spins**:
- Tips unlock wheel spins
- Random outcomes/challenges
- Creates excitement

### Subscriptions and Memberships

**Platform Subscriptions**:
- Monthly recurring support
- Offer subscriber-only perks
- Exclusive emotes/badges

**Member Benefits**:
- Ad-free viewing
- Subscriber-only chat
- Exclusive streams
- Discord access

### Sponsor Integration in Lives

**Types of Sponsorships**:
- Product placements
- Sponsored segments
- Affiliate promotions
- Brand partnerships

**Natural Integration**:
- "Speaking of [topic], our sponsor..."
- Actually use the product
- Be honest about sponsorship
- Don't oversell

**Finding Sponsors**:
- Reach out to brands you use
- Influencer platforms
- Industry connections
- Let sponsors come to you (quality signals)

### Exclusive Live Content

**Premium Streams**:
- Subscriber-only Q&As
- Behind-the-scenes content
- Early access to announcements
- Exclusive tutorials

**Limited Availability**:
- Create urgency
- "Only for the next hour"
- Special event streams

### Merchandise During Streams

- Wear your merch
- Announce new products live
- Limited "stream only" drops
- Flash sales for viewers

### Tracking Revenue

Know your numbers:
- Revenue per stream
- Revenue per viewer
- Which streams earn most
- What incentives work

🔥 **Action Step**: Set up one monetization method for your next stream. Create a simple tip incentive.`
      },
      {
        id: 7,
        title: "Repurposing Live Content",
        duration: "15 min",
        overview: "Get more mileage from your streams. Turn live content into clips, highlights, and evergreen content.",
        keyTakeaways: [
          "Clip creation strategies",
          "Highlight editing",
          "Cross-platform distribution"
        ],
        content: `## Maximize Every Stream

One stream can become dozens of pieces of content. Work smarter, not harder.

### Why Repurpose?

**Efficiency**: Hours of streaming = multiple pieces of content
**Discovery**: Different formats reach different audiences
**Evergreen**: Live moments can live forever
**Algorithm Friendly**: More content = more chances to be seen

### Clip Creation Strategies

**Clip-Worthy Moments**:
- Funny reactions
- Key insights/tips
- Emotional moments
- Controversial takes
- Impressive gameplay/skills

**Clip Length**:
- TikTok/Reels: 15-60 seconds
- YouTube Shorts: 60 seconds
- Twitter: 30-60 seconds
- Stories: 15 seconds

**Mark While Live**:
- Note timestamps of good moments
- Use stream markers if available
- Have mod track highlights

### Highlight Editing

**The Highlight Reel**:
- Best 5-15 minutes from stream
- Uploaded as standalone video
- Good for YouTube

**Editing Approach**:
- Cut dead air and boring parts
- Keep pacing tight
- Add subtitles for accessibility
- Include brief intro/outro

**Software Options**:
- CapCut (free, easy)
- Adobe Premiere
- DaVinci Resolve (free)
- Descript (AI-powered)

### Cross-Platform Distribution

**Platform Matching**:
- Long-form → YouTube
- Clips → TikTok, Reels, Shorts
- Quotes → Twitter, Threads
- Behind-scenes → Stories
- Announcements → All platforms

**Optimization Per Platform**:
- Adjust aspect ratios
- Platform-native captions
- Optimized thumbnails
- Platform-specific hashtags

### The Repurposing Workflow

1. **Stream** → Record everything
2. **Review** → Watch back at 2x speed
3. **Identify** → Mark 5-10 clip-worthy moments
4. **Clip** → Create short-form content
5. **Edit** → Compile highlights
6. **Distribute** → Post across platforms
7. **Schedule** → Space out releases

### Content Calendar From One Stream

**Example: 2-Hour Stream**:
- 1 YouTube highlight (10 min)
- 3-5 TikToks/Reels (15-60 sec)
- 2-3 Twitter clips
- 5 story moments
- Quotes for text posts

That's 2+ weeks of content from one stream!

### Congratulations!

You've completed "Going Live"!

You now know how to:
- Set up a professional stream
- Prepare effectively
- Engage audiences in real-time
- Handle challenges gracefully
- Build a sustainable schedule
- Monetize your live content
- Repurpose into multiple formats

🔥 **Final Action Step**: Schedule your first (or next) stream. Apply at least 3 techniques from this course.`
      }
    ]
  },

  // ============================================
  // WEB3 MASTERY TRACK
  // ============================================
  201: {
    id: 201,
    title: "Crypto 101",
    description: "Wallets, transactions, gas fees, and blockchain basics explained simply",
    longDescription: "Enter the world of cryptocurrency with confidence. This comprehensive introduction covers everything you need to know about blockchain technology, from how it works to how to safely manage your digital assets.",
    totalDuration: "4 hours",
    level: 0,
    badge: "Crypto Novice",
    prerequisites: [],
    learningOutcomes: [
      "Understand how blockchain technology works",
      "Set up and secure a cryptocurrency wallet",
      "Make transactions safely and understand gas fees",
      "Recognize and avoid common crypto scams"
    ],
    lessons: [
      {
        id: 1,
        title: "What is Blockchain?",
        duration: "20 min",
        overview: "Understand the revolutionary technology behind crypto. Learn how decentralized ledgers work in simple terms.",
        keyTakeaways: [
          "Decentralization explained",
          "Blocks and chains",
          "Consensus mechanisms basics"
        ],
        content: `## Understanding Blockchain Technology

Blockchain is the foundation of all cryptocurrency. Understanding it unlocks everything else.

### What is Decentralization?

**Traditional Systems (Centralized)**:
- One company controls the database
- Single point of failure
- Trust required in that company
- They can change rules anytime

**Blockchain (Decentralized)**:
- Thousands of computers share the database
- No single point of failure
- Trust in code, not companies
- Rules enforced by mathematics

### How Blocks and Chains Work

**A Block Contains**:
- A list of transactions
- A timestamp
- A reference to the previous block
- A unique "fingerprint" (hash)

**The Chain**:
- Each block links to the previous one
- Changing old data breaks the chain
- This makes history immutable
- Everyone can verify the chain

**Simple Analogy**:
Imagine a notebook where:
- Every page references the previous page
- Thousands of people have copies
- Any change is instantly visible to all
- Unanimous agreement required for changes

### Consensus Mechanisms

How do thousands of computers agree on what's true?

**Proof of Work (Bitcoin)**:
- Computers solve complex puzzles
- First to solve adds the block
- Very secure but uses lots of energy

**Proof of Stake (Ethereum, Arbitrum)**:
- Validators stake their crypto
- Random selection to add blocks
- Energy efficient
- Bad actors lose their stake

### Why This Matters

Blockchain enables:
- **Trustless transactions**: No middleman needed
- **Transparency**: Anyone can verify
- **Immutability**: History can't be changed
- **Programmability**: Smart contracts automate agreements

### Key Takeaways

- Decentralization = no single point of control
- Blocks are linked, creating an unbreakable chain
- Consensus mechanisms keep everyone honest
- This technology enables digital ownership

🔥 **Action Step**: Visit a block explorer (etherscan.io) and look at recent blocks. See the transactions inside.`
      },
      {
        id: 2,
        title: "Cryptocurrencies Explained",
        duration: "20 min",
        overview: "From Bitcoin to altcoins, understand different types of cryptocurrencies and their purposes.",
        keyTakeaways: [
          "Bitcoin vs Ethereum vs altcoins",
          "Tokens vs coins",
          "Use cases for different cryptos"
        ],
        content: `## The Crypto Landscape

Not all cryptocurrencies are the same. Understanding the differences helps you navigate the space.

### Bitcoin: The Original

**What It Is**:
- First cryptocurrency (2009)
- Digital gold / store of value
- Limited supply (21 million ever)
- Most recognized and liquid

**Best For**:
- Long-term value storage
- Protection against inflation
- Entry point to crypto

### Ethereum: The Platform

**What It Is**:
- Programmable blockchain
- Runs smart contracts
- Hosts thousands of applications
- Second largest by market cap

**Best For**:
- Interacting with DeFi
- NFTs and digital art
- Building decentralized apps

### Altcoins: Everything Else

**Categories**:
- **Layer 1s**: Alternative blockchains (Solana, Avalanche)
- **Layer 2s**: Scale existing chains (Arbitrum, Optimism)
- **DeFi Tokens**: Governance of protocols (UNI, AAVE)
- **Utility Tokens**: Power specific platforms (AXM on Lumina)
- **Memecoins**: Community-driven, high risk (DOGE, SHIB)

### Coins vs Tokens

**Coins**:
- Native to their own blockchain
- Examples: BTC, ETH, SOL
- Pay for network transactions

**Tokens**:
- Built on existing blockchains
- Examples: USDC, UNI, AXM
- Use the host chain for transactions

**AXM (AXIOM)** is a token on Arbitrum (which uses ETH for gas).

### Understanding Use Cases

**Store of Value**: Bitcoin, some altcoins
**Smart Contract Platforms**: Ethereum, Solana
**Stablecoins**: USDC, USDT, DAI (pegged to $1)
**Governance**: Voting in DAOs
**Utility**: Access to specific platforms

### Market Cap and Ranking

**Market Cap** = Price × Supply

Helps compare relative size:
- Bitcoin: ~$1T+ (largest)
- Ethereum: ~$300B+ (second)
- Everything else: varies widely

Higher market cap generally means:
- More liquidity
- Less volatility
- More established

### Stablecoins: Crypto Dollars

**What They Are**:
- Cryptocurrencies pegged to $1
- Bridge between crypto and fiat
- Useful for trading and savings

**Types**:
- **Fiat-backed**: USDC, USDT (dollars in bank)
- **Crypto-backed**: DAI (overcollateralized crypto)
- **Algorithmic**: Various (higher risk)

🔥 **Action Step**: Look up the top 20 cryptocurrencies by market cap. Categorize each by type.`
      },
      {
        id: 3,
        title: "Setting Up Your First Wallet",
        duration: "25 min",
        overview: "Step-by-step guide to creating your crypto wallet. Choose between hot and cold wallets.",
        keyTakeaways: [
          "MetaMask installation",
          "Seed phrase security",
          "Hot vs cold wallet decision"
        ],
        content: `## Your Crypto Wallet

A wallet is your gateway to crypto. Set it up correctly from the start.

### What is a Crypto Wallet?

**Not Actually a Wallet**:
Your crypto isn't "in" the wallet. It's on the blockchain.

**What It Really Is**:
- A key manager
- Holds your private keys
- Signs transactions on your behalf
- Interface to interact with blockchain

### Hot vs Cold Wallets

**Hot Wallets** (Connected to Internet):
- Browser extensions (MetaMask)
- Mobile apps (Trust Wallet)
- Desktop apps
- Convenient for daily use
- More vulnerable to hacks

**Cold Wallets** (Offline):
- Hardware devices (Ledger, Trezor)
- Paper wallets
- Air-gapped computers
- Maximum security
- Less convenient

**Recommendation**: Start with a hot wallet, add cold storage as you accumulate more crypto.

### Setting Up MetaMask

**Step 1: Install**
- Go to metamask.io (verify URL!)
- Download browser extension
- Available for Chrome, Firefox, Brave, Edge

**Step 2: Create Wallet**
- Click "Create a Wallet"
- Set a strong password
- This password is for the browser extension only

**Step 3: Secure Your Seed Phrase**
- Write down all 12 words in order
- Store in a safe place (not digital!)
- Never share with anyone
- This is your master key

**Step 4: Verify**
- Confirm your seed phrase in order
- Complete the setup

### Understanding Your Seed Phrase

**What It Is**:
- 12-24 words in a specific order
- Generates all your private keys
- Can recover your wallet on any device

**Critical Rules**:
- NEVER share it with anyone
- NEVER enter it on websites
- NEVER store it digitally (photos, cloud, email)
- NEVER lose it

**Safe Storage**:
- Write on paper, store securely
- Metal backup for fire/water protection
- Multiple secure locations
- Consider a safety deposit box

### Your Wallet Address

**What It Is**:
- Your public identifier (like an email address)
- Starts with 0x followed by 40 characters
- Example: 0x742d35Cc6634C0532925a3b844Bc9e7595f...

**Safe to Share**:
- Give to others to receive crypto
- Used to track your transactions
- Cannot be used to steal funds

🔥 **Action Step**: Install MetaMask. Write down your seed phrase securely. Send your wallet address to yourself.`
      },
      {
        id: 4,
        title: "Wallet Security Essentials",
        duration: "20 min",
        overview: "Protect your assets. Learn the security practices that keep your crypto safe from hackers.",
        keyTakeaways: [
          "Never share your seed phrase",
          "Recognizing phishing attempts",
          "Hardware wallet benefits"
        ],
        content: `## Protecting Your Crypto

Security is paramount. Once crypto is stolen, it's usually gone forever.

### The #1 Rule: Seed Phrase Protection

**NEVER share your seed phrase**:
- No legitimate service will ever ask for it
- MetaMask support will NEVER ask for it
- No airdrop requires it
- No "wallet verification" needs it

**If Anyone Asks**: It's a scam. 100% of the time.

### Recognizing Phishing Attempts

**Common Tactics**:
- Fake MetaMask popups
- Impersonation on social media
- "Support" reaching out first
- Urgent "security alerts"
- Too-good-to-be-true offers

**Red Flags**:
- Slightly misspelled URLs (metamask[dot]co instead of .io)
- DMs from "support" or "admins"
- Requests for seed phrase or private keys
- Pressure to act immediately
- Promises of free crypto

### Transaction Safety

**Before Signing**:
- Read what you're approving
- Check the contract address
- Understand unlimited approvals
- Verify the site is legitimate

**Simulation Tools**:
- Pocket Universe
- Fire (wallet extension)
- Show you what will happen before you sign

### Hardware Wallet Benefits

**Why Consider One**:
- Private keys never touch the internet
- Physical confirmation required
- Protection from malware
- Worth it for $500+ in crypto

**Popular Options**:
- Ledger Nano (S Plus or X)
- Trezor (Model One or T)
- GridPlus Lattice1

**How They Work**:
- Store keys on secure chip
- Connect to computer/phone when needed
- Physically press button to confirm
- Even if computer is compromised, funds are safe

### Operational Security

**Basic Practices**:
- Use a dedicated browser for crypto
- Bookmark official sites
- Enable 2FA on exchanges
- Use unique, strong passwords
- Keep software updated

**Advanced Practices**:
- Separate wallets for different purposes
- Small "hot wallet" for daily use
- Large holdings in cold storage
- Revoke old token approvals

### What To Do If Compromised

1. Don't panic (but act fast)
2. Transfer remaining funds to new wallet
3. Revoke all token approvals
4. Report the scam (but don't expect recovery)
5. Learn from the experience

🔥 **Action Step**: Review your seed phrase storage. Is it truly secure? Make improvements if needed.`
      },
      {
        id: 5,
        title: "Understanding Gas Fees",
        duration: "20 min",
        overview: "Gas fees can be confusing. Learn what they are, why they exist, and how to optimize them.",
        keyTakeaways: [
          "What gas actually is",
          "Gas price vs gas limit",
          "Layer 2 solutions for lower fees"
        ],
        content: `## Demystifying Gas Fees

Gas fees confuse many newcomers. Understanding them helps you save money.

### What is Gas?

**Simple Explanation**:
Gas is the fee you pay to use the blockchain. Like paying for:
- Postage to send a letter
- Fuel to drive a car
- Electricity to run a computer

**Why It Exists**:
- Prevents spam transactions
- Compensates validators/miners
- Prioritizes important transactions
- Keeps the network running

### Gas Components

**Gas Limit**:
- Maximum units of gas you'll use
- Set by the type of transaction
- Simple transfer: ~21,000
- Complex DeFi: 100,000+
- Don't set too low or transaction fails

**Gas Price (Gwei)**:
- Price per unit of gas
- Fluctuates based on network demand
- Higher price = faster confirmation
- Measured in Gwei (1 ETH = 1 billion Gwei)

**Total Fee**: Gas Limit × Gas Price

### Why Fees Change

**High Fees When**:
- Popular NFT mint happening
- Market volatility (everyone trading)
- Network congested
- Peak usage hours

**Lower Fees When**:
- Weekends (sometimes)
- Early morning/late night
- Low market activity
- Using Layer 2

### Layer 2 Solutions

**The Problem**:
Ethereum Layer 1 can be expensive ($5-100+ per transaction)

**The Solution**:
Layer 2 networks (like Arbitrum) bundle transactions:
- Same security as Ethereum
- Fraction of the cost ($0.10-1.00)
- Faster confirmations

**Lumina uses Arbitrum** because:
- Low fees for social interactions
- Fast transaction times
- Ethereum's security

### Optimizing Gas Costs

**Timing**:
- Use gas trackers (etherscan.io/gastracker)
- Transact during low-demand periods
- Set alerts for low gas prices

**Layer 2**:
- Bridge to Arbitrum, Optimism, etc.
- Conduct most activity there
- Only use L1 when necessary

**Transaction Settings**:
- Use "slow" for non-urgent transactions
- Understand what you're paying for
- Don't overpay for gas limit

### Reading Gas Estimates

When MetaMask shows a transaction:
- **Estimated fee**: What you'll likely pay
- **Max fee**: Maximum possible (rarely reached)
- **Likely time**: Expected confirmation

🔥 **Action Step**: Check current gas prices on etherscan.io/gastracker. Note the difference between slow, average, and fast.`
      },
      {
        id: 6,
        title: "Making Your First Transaction",
        duration: "25 min",
        overview: "Send and receive crypto safely. Practice transactions and understand confirmation times.",
        keyTakeaways: [
          "Sending transactions step-by-step",
          "Confirmation times",
          "Transaction troubleshooting"
        ],
        content: `## Your First Crypto Transaction

Sending crypto is permanent. Learn to do it correctly the first time.

### Before You Send

**Double-Check Everything**:
- Correct wallet address
- Correct network (Ethereum vs Arbitrum vs etc.)
- Correct token/coin
- Amount is right
- You have enough for gas

**The Golden Rule**:
Send a small test amount first for large transfers.

### Sending Step-by-Step

**Step 1: Open Your Wallet**
- Open MetaMask or your wallet
- Ensure you're on the correct network

**Step 2: Click Send**
- Select the asset to send
- Enter the recipient address

**Step 3: Verify the Address**
- Check first and last few characters
- Better: copy/paste, never type manually
- Best: use address book for frequent recipients

**Step 4: Enter Amount**
- Input how much to send
- Leave enough for gas fees

**Step 5: Review Gas**
- Check estimated fee
- Adjust if needed (faster/slower)

**Step 6: Confirm**
- Triple-check everything
- Click confirm
- Wait for processing

### Understanding Confirmations

**What They Mean**:
- Each confirmation = another block added
- More confirmations = more final
- Different platforms require different amounts

**Typical Requirements**:
- Casual use: 1 confirmation
- Exchanges: 12-35 confirmations
- Large amounts: Wait for more

**Confirmation Times**:
- Arbitrum: Seconds to minutes
- Ethereum: 12-15 seconds per block
- Bitcoin: ~10 minutes per block

### Receiving Crypto

**The Process**:
1. Share your wallet address
2. Verify the sender has the right address
3. Wait for the transaction
4. Check on block explorer

**Finding Your Address**:
- Click your account name in MetaMask
- Click "Copy address"
- Share this with the sender

### Transaction Troubleshooting

**Pending Transaction**:
- Gas price might be too low
- Wait or "speed up" with more gas
- Can "cancel" by sending 0 to yourself with same nonce

**Failed Transaction**:
- You still pay gas (computation happened)
- Check error message
- Common: insufficient gas, contract error

**Sent to Wrong Address**:
- Unfortunately, usually unrecoverable
- Some lucky exceptions (helpful recipient)
- Prevention is the only solution

### Transaction Status

Check your transaction on block explorer:
- **Pending**: Still processing
- **Success**: Completed
- **Failed**: Error occurred (gas still charged)

🔥 **Action Step**: Practice by sending a tiny amount to another wallet you control (or a friend). Watch it confirm.`
      },
      {
        id: 7,
        title: "Reading the Blockchain",
        duration: "15 min",
        overview: "Use block explorers to track transactions and verify information on the blockchain.",
        keyTakeaways: [
          "Using Etherscan/Arbiscan",
          "Understanding transaction details",
          "Verifying contract addresses"
        ],
        content: `## Block Explorers: Your Blockchain Microscope

Block explorers let you see everything happening on the blockchain. Learn to read them.

### What is a Block Explorer?

**Purpose**:
- View all blockchain activity
- Track transactions
- Verify addresses and contracts
- Check token balances
- Research before interacting

**Popular Explorers**:
- Etherscan.io (Ethereum)
- Arbiscan.io (Arbitrum)
- Polygonscan.com (Polygon)
- Most chains have their own

### Reading a Transaction

**Key Fields**:
- **Transaction Hash**: Unique ID
- **Status**: Success/Failed/Pending
- **Block**: Which block includes it
- **From**: Sender address
- **To**: Recipient address
- **Value**: Amount transferred
- **Gas Used**: Computation cost
- **Gas Price**: Price per unit

**What to Look For**:
- Status: Did it succeed?
- Value: Is the amount correct?
- From/To: Are addresses right?

### Checking Wallet Balances

**Search by Address**:
1. Go to the block explorer
2. Paste wallet address in search
3. See all holdings and history

**What You'll See**:
- Native token balance (ETH, MATIC, etc.)
- All token holdings
- NFT holdings
- Transaction history
- Token transfers

### Verifying Contracts

**Before Interacting**:
1. Find the contract address
2. Search on block explorer
3. Check if it's verified
4. Look for audit information

**Verified Contract Benefits**:
- Source code is visible
- Anyone can audit
- More trustworthy

**Red Flags**:
- Unverified contracts
- Recent creation (very new)
- No activity
- Suspicious code comments

### Checking Token Legitimacy

**Official vs Scam Tokens**:
- Verify contract address matches official sources
- Check holder count
- Check transaction volume
- Look for verified checkmark

**Example**:
If you're looking for USDC on Arbitrum:
1. Google "USDC Arbitrum contract address"
2. Find official Circle documentation
3. Verify it matches what you see

### Useful Block Explorer Features

**Watchlist**: Track addresses you care about
**Token Approvals**: See what you've approved
**Contract Interaction**: Use contracts directly
**Gas Tracker**: Current fee estimates

🔥 **Action Step**: Look up your wallet address on the appropriate block explorer. Explore your transaction history.`
      },
      {
        id: 8,
        title: "Networks and Bridges",
        duration: "20 min",
        overview: "Navigate between different blockchain networks. Understand mainnet, testnet, and bridges.",
        keyTakeaways: [
          "Adding networks to wallet",
          "Bridge basics",
          "Network switching"
        ],
        content: `## Navigating the Multi-Chain World

Crypto exists across many networks. Learn to move between them safely.

### Understanding Networks

**Mainnet vs Testnet**:
- **Mainnet**: Real network, real money
- **Testnet**: Practice network, fake money
- Always verify you're on the right one

**Layer 1 Networks**:
- Ethereum
- Bitcoin
- Solana
- Avalanche
Each is independent with its own tokens

**Layer 2 Networks**:
- Arbitrum, Optimism (for Ethereum)
- Lightning (for Bitcoin)
- Use the security of L1 with lower costs

### Adding Networks to MetaMask

**Automatic Method**:
1. Visit Chainlist.org
2. Search for network
3. Click "Add to MetaMask"
4. Approve in popup

**Manual Method**:
Settings → Networks → Add Network
Enter:
- Network Name
- RPC URL
- Chain ID
- Currency Symbol
- Block Explorer URL

**Important Networks for Lumina**:
- Arbitrum One (Chain ID: 42161)
- Ethereum Mainnet (Chain ID: 1)

### What are Bridges?

**Purpose**:
Move assets between different networks

**How They Work**:
1. Lock tokens on source network
2. Mint equivalent on destination
3. (Reverse when bridging back)

**Important Bridges**:
- Arbitrum Bridge (official)
- Hop Protocol
- Across Protocol
- Stargate

### Safe Bridging Practices

**Before Bridging**:
- Use official bridges when possible
- Check fees and time estimates
- Verify you have gas on both sides
- Start with small test amounts

**Bridging to Arbitrum**:
1. Visit bridge.arbitrum.io
2. Connect wallet
3. Select asset and amount
4. Approve and confirm
5. Wait for confirmation (can take time)

### Common Network Mistakes

**Wrong Network Transaction**:
- Sending to same address but wrong network
- Funds may be recoverable (same address)
- Or permanently lost (different address format)

**Prevention**:
- Always verify network before sending
- Double-check in wallet UI
- Test with small amount

### Network Switching

**In MetaMask**:
- Click network dropdown (top)
- Select desired network
- Wallet updates to show that network's balances

**When Sites Request**:
- DApps may ask to switch networks
- Verify it's the right network
- Approve the switch

🔥 **Action Step**: Add Arbitrum One to your MetaMask via Chainlist.org. Practice switching between networks.`
      },
      {
        id: 9,
        title: "Common Scams and How to Avoid Them",
        duration: "25 min",
        overview: "Crypto has bad actors. Learn to recognize and avoid the most common scams targeting newcomers.",
        keyTakeaways: [
          "Phishing site recognition",
          "Too-good-to-be-true offers",
          "Safe practices checklist"
        ],
        content: `## Protecting Yourself from Scams

Knowledge is your best defense. Learn what scammers use and how to avoid them.

### Phishing Scams

**How They Work**:
- Fake websites that look real
- Trick you into entering seed phrase
- Or signing malicious transactions

**Recognition**:
- Check URL carefully (metamask.io vs metamask.com)
- Bookmark official sites
- Never click links from DMs
- Google search can lead to fake sponsored ads

**Protection**:
- Type URLs directly
- Use bookmarks
- Verify before connecting wallet
- Use simulation tools

### Fake Token Scams

**How They Work**:
- Airdrop worthless tokens to your wallet
- Token appears valuable
- Interacting triggers malicious contract

**Recognition**:
- Random tokens appearing in wallet
- Tokens you never bought
- "Visit site to claim" messages

**Protection**:
- Never interact with unknown tokens
- Don't try to sell suspicious airdrops
- Hide or ignore them

### Social Engineering

**How They Work**:
- Impersonate support, admins, celebrities
- Build trust then steal
- Create urgency to cloud judgment

**Common Scenarios**:
- "MetaMask support" in DMs
- "Verified" celebrity giving away crypto
- "Admin" asking you to verify wallet
- "Winner" of a contest you didn't enter

**Protection**:
- Real support never DMs first
- No one gives away free money
- Take time, never rush
- Verify through official channels

### Too-Good-to-Be-True Offers

**Red Flags**:
- Guaranteed high returns (100%+ APY)
- "Risk-free" investments
- Secret opportunities
- Time pressure to invest

**Common Schemes**:
- Ponzi schemes (pay old investors with new money)
- Rug pulls (project disappears with funds)
- Pump and dumps (artificially inflate then sell)

**Protection**:
- If it sounds too good, it is
- Research thoroughly
- Check how long project has existed
- Ask: "Where does yield come from?"

### Safe Practices Checklist

**Daily Habits**:
- [ ] Verify URLs before connecting
- [ ] Read what you're signing
- [ ] Keep seed phrase offline
- [ ] Question unexpected messages

**Before Interacting**:
- [ ] Research the project
- [ ] Check contract verification
- [ ] Look for audits
- [ ] Start with small amounts

**Regular Maintenance**:
- [ ] Review token approvals
- [ ] Revoke old approvals
- [ ] Update wallet software
- [ ] Backup seed phrase

🔥 **Action Step**: Install a phishing protection extension. Review your current token approvals at revoke.cash.`
      },
      {
        id: 10,
        title: "Buying Crypto Safely",
        duration: "20 min",
        overview: "From exchanges to on-ramps, learn the safest ways to acquire your first cryptocurrency.",
        keyTakeaways: [
          "Centralized vs decentralized exchanges",
          "KYC requirements",
          "Fiat on-ramp options"
        ],
        content: `## Getting Your First Crypto

There are many ways to buy crypto. Understand your options and choose wisely.

### Centralized Exchanges (CEX)

**What They Are**:
- Companies that facilitate trading
- Hold your crypto in custody
- Similar to traditional stock brokers

**Popular Options**:
- Coinbase (beginner-friendly)
- Kraken (good security reputation)
- Binance (large selection)
- Gemini (regulated, trusted)

**Pros**:
- Easy for beginners
- Fiat on/off ramps
- Customer support
- Insurance on some funds

**Cons**:
- "Not your keys, not your crypto"
- Can freeze accounts
- Require identity verification
- Potential for hacks

### Decentralized Exchanges (DEX)

**What They Are**:
- Smart contract-based trading
- No middleman
- You control your funds

**Popular Options**:
- Uniswap (Ethereum/Arbitrum)
- SushiSwap
- Camelot (Arbitrum native)

**Pros**:
- Full control of funds
- No account needed
- Privacy (no KYC)
- Access to more tokens

**Cons**:
- More complex for beginners
- Need crypto to pay gas
- No customer support
- Slippage and price impact

### KYC Requirements

**What is KYC?**:
Know Your Customer - identity verification

**Typically Requires**:
- Government ID
- Proof of address
- Selfie/photo
- Sometimes video verification

**Why It Exists**:
- Regulatory compliance
- Anti-money laundering
- Fraud prevention

**Privacy Considerations**:
- Your data is stored by exchange
- Some prefer DEXs to avoid
- Trade-off between convenience and privacy

### Fiat On-Ramp Options

**Credit/Debit Card**:
- Fastest option
- Higher fees (3-5%)
- Lower limits
- Available on most exchanges

**Bank Transfer**:
- Lower fees
- Higher limits
- Takes 1-5 days
- ACH, Wire, SEPA

**Third-Party Services**:
- Moonpay, Ramp, Transak
- Built into many wallets
- Convenient but fees vary

**Peer-to-Peer**:
- Buy directly from others
- Platforms like Paxful
- Variable rates and risks

### Your First Purchase Flow

1. **Choose an exchange** based on your needs
2. **Complete KYC** (if required)
3. **Add payment method**
4. **Buy crypto** (start small)
5. **Transfer to personal wallet** (don't leave on exchange long-term)

### Tips for First-Time Buyers

- Start with Bitcoin or Ethereum
- Don't invest more than you can lose
- Use dollar-cost averaging
- Keep records for taxes
- Transfer to personal wallet

🔥 **Action Step**: Create an account on a reputable exchange. Complete KYC. Practice buying a small amount of crypto.`
      },
      {
        id: 11,
        title: "Arbitrum and Layer 2",
        duration: "20 min",
        overview: "Understand Layer 2 scaling solutions and why Lumina uses Arbitrum for fast, cheap transactions.",
        keyTakeaways: [
          "What is Layer 2",
          "Arbitrum advantages",
          "Bridging to Arbitrum"
        ],
        content: `## Understanding Layer 2 and Arbitrum

Layer 2 makes blockchain practical for everyday use. Lumina runs on Arbitrum for this reason.

### The Scaling Problem

**Ethereum's Limitation**:
- Can process ~15-30 transactions/second
- High demand = high fees
- $50+ for simple transactions during peaks

**The Need**:
- Millions of users want to transact
- Fees must be affordable
- Speed must be acceptable

### What is Layer 2?

**The Concept**:
- Build on top of Ethereum
- Process transactions off-chain
- Settle security on-chain
- Get Ethereum's security at lower cost

**Analogy**:
Like express lanes on a highway:
- Same destination (Ethereum security)
- Faster journey
- Less congestion
- Lower tolls

### Types of Layer 2

**Rollups** (Most Common):
- Bundle many transactions
- Post summary to Ethereum
- Two types: Optimistic and ZK

**Optimistic Rollups**:
- Assume transactions are valid
- Challenge period for disputes
- Arbitrum and Optimism use this

**ZK Rollups**:
- Prove validity cryptographically
- Faster finality
- More complex technology

### Arbitrum Advantages

**Why Lumina Uses Arbitrum**:

**Low Fees**:
- Transactions cost cents, not dollars
- Makes social interactions affordable
- Tipping, posting, engaging all cheap

**Fast**:
- Near-instant confirmations
- No waiting for blocks
- Smooth user experience

**Ethereum Security**:
- Inherits Ethereum's security
- Your assets are protected
- Decentralized validation

**Ecosystem**:
- Many DeFi protocols available
- Growing developer community
- Strong infrastructure

### Bridging to Arbitrum

**Official Bridge** (bridge.arbitrum.io):
1. Connect wallet
2. Choose asset
3. Enter amount
4. Approve and wait

**Bridging Time**:
- To Arbitrum: ~10-15 minutes
- From Arbitrum: ~7 days (security period)

**Alternative Bridges**:
- Hop Protocol (faster)
- Across (fast, low fees)
- Synapse (multi-chain)

These third-party bridges are faster for withdrawals but charge fees.

### Using Lumina on Arbitrum

**Requirements**:
- MetaMask with Arbitrum network
- Some ETH on Arbitrum (for gas)
- AXM tokens (for participation)

**Getting Started**:
1. Bridge ETH to Arbitrum
2. Connect wallet to Lumina
3. Get AXM tokens (earn or swap)
4. Start participating!

🔥 **Action Step**: Add Arbitrum to MetaMask. Bridge a small amount of ETH for gas fees.`
      },
      {
        id: 12,
        title: "Your Crypto Journey Begins",
        duration: "10 min",
        overview: "Recap and next steps. Set yourself up for continued learning and safe exploration.",
        keyTakeaways: [
          "Key principles to remember",
          "Resources for continued learning",
          "Community support options"
        ],
        content: `## You're Ready to Explore

Congratulations! You now have the foundation for your crypto journey.

### Key Principles to Remember

**Security First**:
- Never share your seed phrase
- Verify before you sign
- Start small with new things
- If it's too good to be true, it is

**Understanding Before Acting**:
- Research before investing
- Understand gas before transacting
- Know the risks before participating
- Ask questions in communities

**Patience and Learning**:
- You won't understand everything immediately
- Mistakes are learning opportunities
- The space evolves constantly
- Stay curious and humble

### What You've Learned

**Technical Foundations**:
- How blockchain works
- Different cryptocurrencies
- Wallet setup and security
- Gas fees and transactions

**Practical Skills**:
- Navigating networks
- Using block explorers
- Avoiding scams
- Bridging assets

**Lumina Specific**:
- Why Arbitrum
- How to get started
- The AXM ecosystem

### Continued Learning Resources

**Official Documentation**:
- Ethereum.org (comprehensive)
- Arbitrum docs
- Lumina help center

**Educational Platforms**:
- The Forge (you're here!)
- Bankless
- Finematics (YouTube)
- Whiteboard Crypto (YouTube)

**Stay Informed**:
- Follow reputable crypto Twitter accounts
- Join Discord communities
- Read crypto news sites

### Community Support

**Lumina Community**:
- Discord server for help
- Community forums
- Experienced members willing to help

**General Crypto**:
- r/cryptocurrency
- r/ethereum
- Project-specific Discords

**Getting Help**:
- Ask in community channels
- Describe your issue clearly
- Be patient—volunteers help
- Never trust DMs offering "help"

### Your Next Steps

**Immediate**:
1. Secure your wallet properly
2. Bridge to Arbitrum
3. Explore Lumina features

**Short-term**:
4. Complete more Forge courses
5. Start earning AXM
6. Join the community

**Ongoing**:
7. Stay educated
8. Practice safe habits
9. Help others learn

### Congratulations!

You've completed Crypto 101!

You now understand:
- Blockchain fundamentals
- Wallet management
- Transaction mechanics
- Network navigation
- Security best practices
- The Arbitrum advantage

Welcome to the future of finance and social media.

🔥 **Final Action Step**: Make your first transaction on Arbitrum. Explore Lumina and introduce yourself in the community!`
      }
    ]
  },

  202: {
    id: 202,
    title: "Your First NFT",
    description: "Creating, minting, and selling digital art on the blockchain",
    longDescription: "NFTs have revolutionized digital ownership. Learn the complete process of creating, minting, and selling your first NFT, whether you're an artist, musician, or content creator.",
    totalDuration: "2.5 hours",
    level: 1,
    badge: "NFT Creator",
    prerequisites: ["Crypto 101"],
    learningOutcomes: [
      "Understand what NFTs are and their value proposition",
      "Create and mint your first NFT",
      "List and sell NFTs on marketplaces",
      "Build an NFT collection strategy"
    ],
    lessons: [
      {
        id: 1,
        title: "NFTs Demystified",
        duration: "20 min",
        overview: "Cut through the hype. Understand what NFTs really are and why they matter for creators.",
        keyTakeaways: [
          "Digital ownership explained",
          "NFT use cases beyond art",
          "The creator economy angle"
        ]
      },
      {
        id: 2,
        title: "Preparing Your Digital Asset",
        duration: "20 min",
        overview: "Get your artwork ready for the blockchain. File formats, sizes, and optimization.",
        keyTakeaways: [
          "Supported file formats",
          "Resolution and size guidelines",
          "Metadata preparation"
        ]
      },
      {
        id: 3,
        title: "Choosing Your Marketplace",
        duration: "15 min",
        overview: "Different marketplaces serve different needs. Learn which platform fits your goals.",
        keyTakeaways: [
          "Marketplace comparison",
          "Fee structures",
          "Audience considerations"
        ]
      },
      {
        id: 4,
        title: "Minting Your First NFT",
        duration: "25 min",
        overview: "Step-by-step minting process. From connecting your wallet to completing your first mint.",
        keyTakeaways: [
          "Minting walkthrough",
          "Gas fee management",
          "Lazy minting options"
        ]
      },
      {
        id: 5,
        title: "Pricing Strategies",
        duration: "15 min",
        overview: "How much is your NFT worth? Learn pricing strategies that balance value and sales.",
        keyTakeaways: [
          "Fixed price vs auction",
          "Research-based pricing",
          "Edition sizes"
        ]
      },
      {
        id: 6,
        title: "Marketing Your NFTs",
        duration: "20 min",
        overview: "NFTs don't sell themselves. Learn promotion strategies that attract collectors.",
        keyTakeaways: [
          "Building collector relationships",
          "Social media promotion",
          "Community engagement"
        ]
      },
      {
        id: 7,
        title: "Royalties and Ongoing Revenue",
        duration: "15 min",
        overview: "Set up royalties for passive income. Understand secondary sales and their potential.",
        keyTakeaways: [
          "Royalty percentages",
          "Marketplace royalty support",
          "Long-term revenue planning"
        ]
      },
      {
        id: 8,
        title: "Building a Collection",
        duration: "20 min",
        overview: "Think beyond single pieces. Plan and launch a cohesive NFT collection.",
        keyTakeaways: [
          "Collection themes",
          "Release strategies",
          "Roadmap planning"
        ]
      }
    ]
  },

  203: {
    id: 203,
    title: "Understanding DeFi",
    description: "Staking, liquidity provision, yield farming, and DEX fundamentals",
    longDescription: "Decentralized Finance (DeFi) offers financial opportunities without traditional intermediaries. Master the concepts and safely participate in staking, liquidity provision, and yield strategies.",
    totalDuration: "3.5 hours",
    level: 2,
    badge: "DeFi Expert",
    prerequisites: ["Crypto 101"],
    learningOutcomes: [
      "Navigate decentralized exchanges confidently",
      "Understand and participate in staking",
      "Provide liquidity and understand impermanent loss",
      "Evaluate DeFi opportunities and risks"
    ],
    lessons: [
      {
        id: 1,
        title: "DeFi Fundamentals",
        duration: "20 min",
        overview: "What makes finance 'decentralized'? Understand the philosophy and mechanics of DeFi.",
        keyTakeaways: [
          "Traditional vs decentralized finance",
          "Smart contracts in finance",
          "Key DeFi principles"
        ]
      },
      {
        id: 2,
        title: "Decentralized Exchanges (DEXs)",
        duration: "25 min",
        overview: "Trade without intermediaries. Learn to use DEXs like a pro.",
        keyTakeaways: [
          "AMM mechanics",
          "Swapping tokens",
          "Slippage and price impact"
        ]
      },
      {
        id: 3,
        title: "Understanding Staking",
        duration: "20 min",
        overview: "Earn rewards by locking your tokens. Learn staking mechanics and strategies.",
        keyTakeaways: [
          "How staking works",
          "APY calculations",
          "Lock periods and risks"
        ]
      },
      {
        id: 4,
        title: "Staking AXM on Lumina",
        duration: "20 min",
        overview: "Practical guide to staking AXM tokens. Step-by-step through the Lumina staking interface.",
        keyTakeaways: [
          "Staking walkthrough",
          "Reward claiming",
          "Unstaking process"
        ]
      },
      {
        id: 5,
        title: "Liquidity Provision Basics",
        duration: "25 min",
        overview: "Become a liquidity provider. Understand how LPs work and earn trading fees.",
        keyTakeaways: [
          "Liquidity pools explained",
          "Adding/removing liquidity",
          "LP tokens"
        ]
      },
      {
        id: 6,
        title: "Impermanent Loss Explained",
        duration: "20 min",
        overview: "The main risk of LP. Understand impermanent loss and strategies to mitigate it.",
        keyTakeaways: [
          "How IL happens",
          "Calculating IL",
          "IL mitigation strategies"
        ]
      },
      {
        id: 7,
        title: "Yield Farming Strategies",
        duration: "25 min",
        overview: "Maximize your returns. Learn yield farming strategies from conservative to aggressive.",
        keyTakeaways: [
          "Farming vs staking",
          "Compounding strategies",
          "Risk-adjusted returns"
        ]
      },
      {
        id: 8,
        title: "DeFi Risk Assessment",
        duration: "20 min",
        overview: "Not all protocols are safe. Learn to evaluate DeFi projects before depositing.",
        keyTakeaways: [
          "Audit importance",
          "TVL and liquidity depth",
          "Team and track record"
        ]
      },
      {
        id: 9,
        title: "DeFi Security Practices",
        duration: "20 min",
        overview: "Protect yourself in DeFi. Security practices specific to decentralized finance.",
        keyTakeaways: [
          "Approval management",
          "Revoking permissions",
          "Transaction simulation"
        ]
      },
      {
        id: 10,
        title: "Building Your DeFi Portfolio",
        duration: "15 min",
        overview: "Putting it all together. Create a balanced DeFi strategy aligned with your goals.",
        keyTakeaways: [
          "Diversification principles",
          "Rebalancing strategies",
          "Tracking tools"
        ]
      }
    ]
  },

  204: {
    id: 204,
    title: "DAO Participation",
    description: "How to vote, create proposals, and govern decentralized organizations",
    longDescription: "DAOs represent a new form of organization. Learn to actively participate in decentralized governance, from voting on proposals to creating your own and understanding the dynamics of collective decision-making.",
    totalDuration: "2 hours",
    level: 1,
    badge: "DAO Citizen",
    prerequisites: ["Crypto 101"],
    learningOutcomes: [
      "Understand DAO structures and governance models",
      "Participate effectively in DAO voting",
      "Create and champion proposals",
      "Navigate DAO politics and community dynamics"
    ],
    lessons: [
      {
        id: 1,
        title: "What is a DAO?",
        duration: "20 min",
        overview: "Decentralized Autonomous Organizations explained. Understand this new organizational paradigm.",
        keyTakeaways: [
          "DAO definition and types",
          "Smart contract governance",
          "Token-based voting"
        ]
      },
      {
        id: 2,
        title: "Governance Token Mechanics",
        duration: "15 min",
        overview: "Understand how tokens translate to voting power and influence in DAOs.",
        keyTakeaways: [
          "Voting power calculation",
          "Delegation options",
          "Token distribution models"
        ]
      },
      {
        id: 3,
        title: "Reading and Evaluating Proposals",
        duration: "20 min",
        overview: "Not all proposals deserve your vote. Learn to analyze proposals critically.",
        keyTakeaways: [
          "Proposal anatomy",
          "Impact assessment",
          "Hidden implications"
        ]
      },
      {
        id: 4,
        title: "Casting Your Vote",
        duration: "15 min",
        overview: "Step-by-step guide to voting in DAO governance. From connecting wallet to confirming votes.",
        keyTakeaways: [
          "Voting interface walkthrough",
          "Gas-free voting options",
          "Vote delegation"
        ]
      },
      {
        id: 5,
        title: "Creating Proposals",
        duration: "20 min",
        overview: "Have an idea? Learn to create proposals that gain support and pass.",
        keyTakeaways: [
          "Proposal writing best practices",
          "Building support before submission",
          "Responding to feedback"
        ]
      },
      {
        id: 6,
        title: "DAO Community Dynamics",
        duration: "15 min",
        overview: "DAOs are communities. Navigate the social dynamics of decentralized organizations.",
        keyTakeaways: [
          "Building reputation",
          "Finding allies",
          "Constructive disagreement"
        ]
      }
    ]
  },

  // ============================================
  // MONETIZATION & GROWTH TRACK
  // ============================================
  301: {
    id: 301,
    title: "Earning AXM",
    description: "All the ways to earn tokens on Lumina through content and engagement",
    longDescription: "Lumina rewards creators and participants with AXM tokens. Discover all the ways to earn on the platform, from content creation to engagement activities, and maximize your token earnings.",
    totalDuration: "2 hours",
    level: 0,
    badge: "Token Earner",
    prerequisites: [],
    learningOutcomes: [
      "Understand all AXM earning opportunities on Lumina",
      "Optimize your activities for maximum rewards",
      "Track and manage your earnings effectively",
      "Plan a sustainable earning strategy"
    ],
    lessons: [
      {
        id: 1,
        title: "The Lumina Rewards System",
        duration: "15 min",
        overview: "How Lumina distributes rewards. Understand the tokenomics behind your earnings.",
        keyTakeaways: [
          "Reward pool mechanics",
          "Distribution schedules",
          "Earning multipliers"
        ]
      },
      {
        id: 2,
        title: "Content Creation Rewards",
        duration: "20 min",
        overview: "Earn by creating. Learn how content performance translates to AXM rewards.",
        keyTakeaways: [
          "Quality scoring factors",
          "Engagement bonuses",
          "Consistency rewards"
        ]
      },
      {
        id: 3,
        title: "Engagement Rewards",
        duration: "15 min",
        overview: "Active participation pays. Earn through likes, comments, and community engagement.",
        keyTakeaways: [
          "Engagement point system",
          "Daily earning limits",
          "Quality vs quantity"
        ]
      },
      {
        id: 4,
        title: "Daily Check-ins and Streaks",
        duration: "15 min",
        overview: "Consistency is rewarded. Maximize earnings through daily activities and streaks.",
        keyTakeaways: [
          "Check-in bonuses",
          "Streak multipliers",
          "Recovery strategies"
        ]
      },
      {
        id: 5,
        title: "Quest and Achievement Rewards",
        duration: "15 min",
        overview: "Complete quests for bonus earnings. Track and optimize your achievement hunting.",
        keyTakeaways: [
          "Quest types and rewards",
          "Achievement badges",
          "Strategic quest completion"
        ]
      },
      {
        id: 6,
        title: "Level-Based Earning Bonuses",
        duration: "15 min",
        overview: "Higher levels mean higher earnings. Understand how XP translates to earning power.",
        keyTakeaways: [
          "Level bonus percentages",
          "XP optimization",
          "Long-term progression"
        ]
      },
      {
        id: 7,
        title: "Claiming and Managing Rewards",
        duration: "15 min",
        overview: "Get your earnings into your wallet. Learn the claiming process and gas optimization.",
        keyTakeaways: [
          "Claim process walkthrough",
          "Gas cost considerations",
          "Optimal claim timing"
        ]
      },
      {
        id: 8,
        title: "Building a Sustainable Strategy",
        duration: "10 min",
        overview: "Avoid burnout while maximizing earnings. Create a balanced earning strategy.",
        keyTakeaways: [
          "Time vs reward optimization",
          "Activity balance",
          "Long-term sustainability"
        ]
      }
    ]
  },

  302: {
    id: 302,
    title: "Tipping Economy",
    description: "How to receive and give tips effectively, building supporter relationships",
    longDescription: "Tips are direct support from your community. Learn to cultivate a tipping culture around your content, build relationships with supporters, and create content that inspires generosity.",
    totalDuration: "1.5 hours",
    level: 0,
    badge: "Tip Master",
    prerequisites: [],
    learningOutcomes: [
      "Create content that inspires tips",
      "Build genuine relationships with tippers",
      "Set up and manage tip receiving",
      "Develop a culture of reciprocal support"
    ],
    lessons: [
      {
        id: 1,
        title: "The Psychology of Tipping",
        duration: "15 min",
        overview: "Why do people tip? Understand the motivations that drive supporters to give.",
        keyTakeaways: [
          "Tipping motivations",
          "Emotional triggers",
          "Value exchange mindset"
        ]
      },
      {
        id: 2,
        title: "Setting Up Tip Receiving",
        duration: "15 min",
        overview: "Technical setup for receiving tips. Configure your wallet and profile for tips.",
        keyTakeaways: [
          "Wallet configuration",
          "Profile tip settings",
          "Payment visibility"
        ]
      },
      {
        id: 3,
        title: "Content That Inspires Support",
        duration: "20 min",
        overview: "Create content people want to support. Learn what makes viewers reach for their wallets.",
        keyTakeaways: [
          "Value-first content",
          "Vulnerability and authenticity",
          "Call-to-action placement"
        ]
      },
      {
        id: 4,
        title: "Building Supporter Relationships",
        duration: "20 min",
        overview: "Tips are relationships. Nurture your supporters and turn one-time tippers into regulars.",
        keyTakeaways: [
          "Thank you best practices",
          "Exclusive recognition",
          "Community building with supporters"
        ]
      },
      {
        id: 5,
        title: "Strategic Tipping as a Creator",
        duration: "15 min",
        overview: "Give to receive. How strategic tipping to others builds your own community.",
        keyTakeaways: [
          "Reciprocity dynamics",
          "Networking through tips",
          "Budget allocation"
        ]
      }
    ]
  },

  303: {
    id: 303,
    title: "Building Paid Communities",
    description: "Premium content strategies, subscriptions, and exclusive access",
    longDescription: "Transform followers into paying members. Learn to create premium content tiers, exclusive communities, and subscription models that provide real value to your most dedicated fans.",
    totalDuration: "3 hours",
    level: 2,
    badge: "Community Leader",
    prerequisites: ["Engagement Secrets", "Earning AXM"],
    learningOutcomes: [
      "Design compelling premium content offerings",
      "Price and structure subscription tiers",
      "Deliver ongoing value to paying members",
      "Scale community management effectively"
    ],
    lessons: [
      {
        id: 1,
        title: "The Premium Community Model",
        duration: "20 min",
        overview: "Why paid communities work. Understand the business model and value proposition.",
        keyTakeaways: [
          "Free vs paid content balance",
          "Community value proposition",
          "Sustainable creator income"
        ]
      },
      {
        id: 2,
        title: "Designing Your Offer",
        duration: "25 min",
        overview: "What will members pay for? Create an irresistible premium offer.",
        keyTakeaways: [
          "Exclusive content ideas",
          "Access and community benefits",
          "Unique experiences"
        ]
      },
      {
        id: 3,
        title: "Tier Structure and Pricing",
        duration: "20 min",
        overview: "Multiple tiers serve different fans. Learn to structure and price your offerings.",
        keyTakeaways: [
          "Tier design principles",
          "Pricing psychology",
          "Upgrade paths"
        ]
      },
      {
        id: 4,
        title: "Launching Your Paid Community",
        duration: "20 min",
        overview: "Launch with impact. Strategies for a successful paid community launch.",
        keyTakeaways: [
          "Pre-launch buildup",
          "Founding member incentives",
          "Launch day execution"
        ]
      },
      {
        id: 5,
        title: "Delivering Consistent Value",
        duration: "20 min",
        overview: "Retention requires ongoing value. Create systems for consistent member satisfaction.",
        keyTakeaways: [
          "Content calendars for members",
          "Surprise and delight moments",
          "Feedback loops"
        ]
      },
      {
        id: 6,
        title: "Managing Member Expectations",
        duration: "15 min",
        overview: "Clear expectations prevent churn. Set and manage what members expect from you.",
        keyTakeaways: [
          "Onboarding processes",
          "Communication standards",
          "Handling disappointment"
        ]
      },
      {
        id: 7,
        title: "Community Moderation at Scale",
        duration: "20 min",
        overview: "As communities grow, moderation matters more. Systems for healthy paid communities.",
        keyTakeaways: [
          "Rules and guidelines",
          "Moderator recruitment",
          "Conflict resolution"
        ]
      },
      {
        id: 8,
        title: "Reducing Churn",
        duration: "15 min",
        overview: "Keep members longer. Strategies to reduce cancellations and increase lifetime value.",
        keyTakeaways: [
          "Churn warning signs",
          "Re-engagement campaigns",
          "Exit interviews"
        ]
      },
      {
        id: 9,
        title: "Scaling Your Community",
        duration: "20 min",
        overview: "Grow without losing quality. Scale your paid community sustainably.",
        keyTakeaways: [
          "Automation opportunities",
          "Team building",
          "Maintaining intimacy at scale"
        ]
      },
      {
        id: 10,
        title: "Advanced Monetization",
        duration: "15 min",
        overview: "Beyond subscriptions. Additional revenue streams within your community.",
        keyTakeaways: [
          "One-time purchases",
          "Live events and workshops",
          "Merchandise and products"
        ]
      }
    ]
  },

  304: {
    id: 304,
    title: "Referral Mastery",
    description: "Growing your network for rewards and building viral loops",
    longDescription: "Turn your network into a growth engine. Master referral strategies that reward you while genuinely helping others discover the platform.",
    totalDuration: "2 hours",
    level: 1,
    badge: "Growth Hacker",
    prerequisites: ["Building Your Brand"],
    learningOutcomes: [
      "Understand referral program mechanics and rewards",
      "Create authentic referral content",
      "Build viral loops that compound growth",
      "Track and optimize referral performance"
    ],
    lessons: [
      {
        id: 1,
        title: "Referral Program Fundamentals",
        duration: "15 min",
        overview: "How the Lumina referral program works. Understand the rewards and mechanics.",
        keyTakeaways: [
          "Reward structure",
          "Tracking and attribution",
          "Tier bonuses"
        ]
      },
      {
        id: 2,
        title: "Finding Your Referral Audience",
        duration: "20 min",
        overview: "Who should you refer? Identify and reach people who will thrive on the platform.",
        keyTakeaways: [
          "Ideal referral profiles",
          "Where to find them",
          "Qualification strategies"
        ]
      },
      {
        id: 3,
        title: "Authentic Referral Messaging",
        duration: "20 min",
        overview: "Avoid being spammy. Create referral content that's genuinely helpful.",
        keyTakeaways: [
          "Value-first messaging",
          "Storytelling approaches",
          "Avoiding common pitfalls"
        ]
      },
      {
        id: 4,
        title: "Referral Content Strategies",
        duration: "20 min",
        overview: "Create content that naturally drives referrals. Integrate referrals into your content strategy.",
        keyTakeaways: [
          "Tutorial content",
          "Success story sharing",
          "Platform showcase videos"
        ]
      },
      {
        id: 5,
        title: "Building Viral Loops",
        duration: "20 min",
        overview: "Create systems where referrals generate more referrals. Compound your growth.",
        keyTakeaways: [
          "Network effect design",
          "Incentive alignment",
          "Gamification elements"
        ]
      },
      {
        id: 6,
        title: "Tracking and Optimizing",
        duration: "15 min",
        overview: "Measure what works. Use data to improve your referral strategy.",
        keyTakeaways: [
          "Key metrics to track",
          "A/B testing approaches",
          "Continuous improvement"
        ]
      }
    ]
  },

  // ============================================
  // COMMUNITY & ADVOCACY TRACK
  // ============================================
  401: {
    id: 401,
    title: "Leading Groups",
    description: "How to create, grow, and moderate thriving communities",
    longDescription: "Great communities don't happen by accident. Learn the skills to create, nurture, and lead groups that bring people together around shared interests and values.",
    totalDuration: "2.5 hours",
    level: 1,
    badge: "Group Leader",
    prerequisites: ["Engagement Secrets"],
    learningOutcomes: [
      "Create groups with clear purpose and identity",
      "Grow membership organically",
      "Moderate effectively and fairly",
      "Build a self-sustaining community culture"
    ],
    lessons: [
      {
        id: 1,
        title: "The Purpose-Driven Group",
        duration: "20 min",
        overview: "Start with why. Define a compelling purpose that attracts and retains members.",
        keyTakeaways: [
          "Purpose statement crafting",
          "Niche vs broad focus",
          "Differentiating your group"
        ]
      },
      {
        id: 2,
        title: "Setting Up for Success",
        duration: "15 min",
        overview: "First impressions matter. Set up your group to welcome and onboard new members effectively.",
        keyTakeaways: [
          "Group settings optimization",
          "Welcome message creation",
          "Initial content seeding"
        ]
      },
      {
        id: 3,
        title: "Establishing Group Culture",
        duration: "20 min",
        overview: "Culture is what happens when you're not looking. Deliberately build the culture you want.",
        keyTakeaways: [
          "Cultural values definition",
          "Modeling behavior",
          "Ritual and tradition creation"
        ]
      },
      {
        id: 4,
        title: "Growing Your Membership",
        duration: "20 min",
        overview: "Quality over quantity. Grow your group with the right members.",
        keyTakeaways: [
          "Promotion strategies",
          "Member vetting",
          "Referral encouragement"
        ]
      },
      {
        id: 5,
        title: "Driving Engagement",
        duration: "20 min",
        overview: "Active groups thrive. Create content and activities that keep members engaged.",
        keyTakeaways: [
          "Discussion prompts",
          "Regular events",
          "Member spotlights"
        ]
      },
      {
        id: 6,
        title: "Moderation Best Practices",
        duration: "20 min",
        overview: "Fair, consistent moderation builds trust. Learn to moderate effectively.",
        keyTakeaways: [
          "Rules and enforcement",
          "Warning systems",
          "Ban decisions"
        ]
      },
      {
        id: 7,
        title: "Building a Mod Team",
        duration: "15 min",
        overview: "You can't do it alone. Build and manage a moderation team.",
        keyTakeaways: [
          "Mod recruitment",
          "Training and guidelines",
          "Mod communication"
        ]
      },
      {
        id: 8,
        title: "Sustaining Long-Term Growth",
        duration: "20 min",
        overview: "Keep the momentum going. Strategies for long-term community health.",
        keyTakeaways: [
          "Preventing stagnation",
          "Evolving with members",
          "Leadership succession"
        ]
      }
    ]
  },

  402: {
    id: 402,
    title: "Positive Impact",
    description: "Creating content for social good and meaningful change",
    longDescription: "Use your platform for good. Learn to create content that raises awareness, drives action, and creates meaningful positive change in the world.",
    totalDuration: "2 hours",
    level: 0,
    badge: "Change Maker",
    prerequisites: [],
    learningOutcomes: [
      "Identify causes aligned with your values and audience",
      "Create compelling advocacy content",
      "Mobilize your community for action",
      "Measure and communicate impact"
    ],
    lessons: [
      {
        id: 1,
        title: "Finding Your Cause",
        duration: "20 min",
        overview: "Authenticity matters. Find causes that genuinely resonate with you and your audience.",
        keyTakeaways: [
          "Values alignment",
          "Audience interest mapping",
          "Cause research"
        ]
      },
      {
        id: 2,
        title: "Advocacy Content Creation",
        duration: "25 min",
        overview: "Move hearts and minds. Create content that educates and inspires action.",
        keyTakeaways: [
          "Storytelling for impact",
          "Facts and emotion balance",
          "Call to action design"
        ]
      },
      {
        id: 3,
        title: "Partnering with Organizations",
        duration: "15 min",
        overview: "Amplify impact through partnerships. Work with nonprofits and social enterprises.",
        keyTakeaways: [
          "Finding partners",
          "Collaboration structures",
          "Maintaining authenticity"
        ]
      },
      {
        id: 4,
        title: "Fundraising Through Content",
        duration: "20 min",
        overview: "Turn views into donations. Create fundraising campaigns that succeed.",
        keyTakeaways: [
          "Campaign design",
          "Goal setting",
          "Transparency and trust"
        ]
      },
      {
        id: 5,
        title: "Handling Sensitive Topics",
        duration: "20 min",
        overview: "Some topics require extra care. Navigate sensitive issues responsibly.",
        keyTakeaways: [
          "Trigger warnings and sensitivity",
          "Fact-checking importance",
          "Avoiding harm"
        ]
      },
      {
        id: 6,
        title: "Measuring and Sharing Impact",
        duration: "20 min",
        overview: "Show the difference you've made. Track and communicate your impact.",
        keyTakeaways: [
          "Impact metrics",
          "Reporting to supporters",
          "Celebrating wins"
        ]
      }
    ]
  },

  403: {
    id: 403,
    title: "Volunteer Training",
    description: "Become a platform ambassador and help others succeed",
    longDescription: "Give back to the community that supports you. Learn to become a platform ambassador who welcomes newcomers, answers questions, and helps others succeed.",
    totalDuration: "1.5 hours",
    level: 0,
    badge: "Ambassador",
    prerequisites: [],
    learningOutcomes: [
      "Understand the ambassador role and responsibilities",
      "Help newcomers navigate the platform",
      "Answer common questions effectively",
      "Represent the community positively"
    ],
    lessons: [
      {
        id: 1,
        title: "The Ambassador Role",
        duration: "15 min",
        overview: "What ambassadors do and why it matters. Understand your role in the community.",
        keyTakeaways: [
          "Ambassador responsibilities",
          "Impact of good ambassadors",
          "Recognition and rewards"
        ]
      },
      {
        id: 2,
        title: "Welcoming Newcomers",
        duration: "20 min",
        overview: "First impressions count. Learn to welcome new members warmly and helpfully.",
        keyTakeaways: [
          "Welcome message templates",
          "Orientation guidance",
          "Common new user struggles"
        ]
      },
      {
        id: 3,
        title: "Answering Questions",
        duration: "20 min",
        overview: "Be a helpful resource. Learn to answer questions accurately and kindly.",
        keyTakeaways: [
          "Common questions database",
          "When to escalate",
          "Teaching vs telling"
        ]
      },
      {
        id: 4,
        title: "De-escalation Skills",
        duration: "20 min",
        overview: "Handle difficult situations gracefully. Learn de-escalation techniques.",
        keyTakeaways: [
          "Staying calm",
          "Empathetic responses",
          "When to step back"
        ]
      },
      {
        id: 5,
        title: "Representing the Community",
        duration: "15 min",
        overview: "You're a face of the community. Represent it positively while being authentic.",
        keyTakeaways: [
          "Brand alignment",
          "Constructive feedback",
          "Public vs private communication"
        ]
      }
    ]
  },

  404: {
    id: 404,
    title: "Safety & Guidelines",
    description: "Understanding content moderation and community standards",
    longDescription: "A safe platform benefits everyone. Understand the community guidelines, learn to recognize violations, and contribute to a positive, safe environment for all users.",
    totalDuration: "1 hour",
    level: 0,
    badge: "Safety Champion",
    prerequisites: [],
    learningOutcomes: [
      "Understand community guidelines thoroughly",
      "Recognize guideline violations",
      "Report issues appropriately",
      "Model safe behavior for others"
    ],
    lessons: [
      {
        id: 1,
        title: "Community Guidelines Overview",
        duration: "15 min",
        overview: "Know the rules. Comprehensive overview of Lumina's community guidelines.",
        keyTakeaways: [
          "Core guidelines",
          "Prohibited content types",
          "Consequence tiers"
        ]
      },
      {
        id: 2,
        title: "Recognizing Violations",
        duration: "15 min",
        overview: "See something, say something. Learn to identify content that violates guidelines.",
        keyTakeaways: [
          "Common violation types",
          "Gray area navigation",
          "Context consideration"
        ]
      },
      {
        id: 3,
        title: "Reporting Effectively",
        duration: "15 min",
        overview: "Reports that help. Learn to submit reports that enable effective moderation.",
        keyTakeaways: [
          "Reporting process",
          "Providing context",
          "Follow-up expectations"
        ]
      },
      {
        id: 4,
        title: "Being a Safety Role Model",
        duration: "15 min",
        overview: "Lead by example. Model safe, positive behavior that others can follow.",
        keyTakeaways: [
          "Positive content creation",
          "Constructive interactions",
          "Supporting others"
        ]
      }
    ]
  }
};

export const COURSE_CATEGORIES_DETAIL: CourseCategory[] = [
  {
    id: 'creator',
    name: 'Creator Foundations',
    icon: Video,
    color: 'from-pink-500/20 to-rose-500/10',
    iconColor: 'text-pink-500',
    description: 'Master content creation and grow your audience',
    courses: [101, 102, 103, 104]
  },
  {
    id: 'web3',
    name: 'Web3 Mastery',
    icon: Wallet,
    color: 'from-blue-500/20 to-cyan-500/10',
    iconColor: 'text-blue-500',
    description: 'Understand blockchain, crypto, and decentralized tech',
    courses: [201, 202, 203, 204]
  },
  {
    id: 'monetization',
    name: 'Monetization & Growth',
    icon: Coins,
    color: 'from-amber-500/20 to-yellow-500/10',
    iconColor: 'text-amber-500',
    description: 'Turn your passion into sustainable income',
    courses: [301, 302, 303, 304]
  },
  {
    id: 'community',
    name: 'Community & Advocacy',
    icon: Heart,
    color: 'from-emerald-500/20 to-green-500/10',
    iconColor: 'text-emerald-500',
    description: 'Lead and inspire positive change',
    courses: [401, 402, 403, 404]
  }
];

export function getCourseById(id: number): CourseContent | undefined {
  return COURSE_CONTENT[id];
}

export function getCoursesByCategory(categoryId: string): CourseContent[] {
  const category = COURSE_CATEGORIES_DETAIL.find(c => c.id === categoryId);
  if (!category) return [];
  return category.courses.map(id => COURSE_CONTENT[id]).filter(Boolean);
}

export function getCategoryForCourse(courseId: number): CourseCategory | undefined {
  return COURSE_CATEGORIES_DETAIL.find(cat => cat.courses.includes(courseId));
}
