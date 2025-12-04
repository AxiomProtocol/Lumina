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
        ],
        content: `## Understanding NFTs

NFTs are more than hype. They're a fundamental shift in how digital ownership works.

### What is an NFT?

**NFT = Non-Fungible Token**

**Fungible** (Interchangeable):
- One dollar equals any other dollar
- One Bitcoin equals any other Bitcoin
- Units are identical

**Non-Fungible** (Unique):
- Each token is distinct
- Has unique properties
- Cannot be directly swapped

### Digital Ownership Explained

**The Problem Before NFTs**:
- Digital files are infinitely copyable
- No way to prove "ownership"
- Creators couldn't sell originals
- No scarcity for digital goods

**What NFTs Solve**:
- Provable ownership on blockchain
- Authentic "original" verified
- Scarcity can be programmed
- Ownership history is transparent

**What You Actually Own**:
- A token pointing to the asset
- Provable ownership rights
- Potentially: commercial rights, access, membership

### NFT Use Cases Beyond Art

**Digital Art**: The most visible use case
**Music**: Albums, songs, stems as NFTs
**Gaming**: In-game items, characters, skins
**Collectibles**: Trading cards, sports moments
**Memberships**: Exclusive access tokens
**Identity**: Proof of achievement, credentials
**Real Estate**: Property deeds (emerging)
**Tickets**: Event access, anti-scalping

### The Creator Economy Angle

**Traditional Model**:
- Creators sell to platforms
- Platforms own the relationship
- One-time payment
- No secondary market benefit

**NFT Model**:
- Creators sell directly to fans
- Creators keep the relationship
- Royalties on resales (5-10%)
- Community building asset

### Why This Matters for You

**As a Creator**:
- New revenue stream
- Direct fan connection
- Passive income from royalties
- Community building tool

**As a Collector**:
- Support creators directly
- Own verifiable originals
- Potential appreciation
- Access and membership perks

### Common Misconceptions

**"It's just a JPEG"**: The token represents ownership, not the file
**"Anyone can screenshot"**: Ownership proof is on-chain
**"It's a scam"**: Technology is real; individual projects vary
**"It's bad for environment"**: Arbitrum uses 99%+ less energy than old systems

🔥 **Action Step**: Browse an NFT marketplace (OpenSea, Blur). Look at different categories beyond art.`
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
        ],
        content: `## Getting Your Art NFT-Ready

Proper preparation ensures your NFT displays correctly and looks professional everywhere.

### Supported File Formats

**Images**:
- PNG (recommended for art)
- JPEG (smaller files)
- GIF (animations)
- SVG (vector graphics)
- WEBP (efficient web format)

**Video**:
- MP4 (most compatible)
- WEBM
- MOV (larger files)

**Audio**:
- MP3
- WAV (higher quality)
- FLAC

**3D**:
- GLB/GLTF
- Supported on select platforms

### Resolution and Size Guidelines

**Image Recommendations**:
- Minimum: 1000 x 1000 pixels
- Recommended: 2000 x 2000 or higher
- Max file size: varies (50-100MB typical)

**Video Recommendations**:
- 1080p or higher
- Keep under 100MB (most platforms)
- Shorter = smaller file

**Why Higher Resolution**:
- Future-proof for displays
- Print-quality if needed
- Professional appearance
- Zoom-friendly

### Optimizing File Size

**For Images**:
- Use PNG for crisp edges
- Use JPEG for photographs
- Compress without visible quality loss
- Tools: TinyPNG, ImageOptim

**For Video**:
- Use efficient codecs (H.264)
- Balance quality vs size
- Consider shorter loops

### Understanding Metadata

**What is Metadata?**:
Information attached to your NFT that describes it.

**Standard Fields**:
- **Name**: Title of your NFT
- **Description**: Story, meaning, details
- **External URL**: Link to more info
- **Attributes/Properties**: Traits and values

**Example Attributes**:
- Background: Blue
- Rarity: Legendary
- Edition: 1 of 10
- Artist: Your Name

### Writing Good Descriptions

**Include**:
- Story behind the piece
- Inspiration and meaning
- Technical details (medium, tools)
- Rights information
- Your artist statement

**Keep It**:
- Engaging and personal
- Clear about what buyer gets
- Professional but authentic

### Preparing Collections

**If Creating Multiple NFTs**:
- Consistent naming convention
- Organized trait system
- Planned rarity distribution
- Collection-wide theme

**File Organization**:
- Number your files consistently
- Match filenames to NFT names
- Keep originals backed up
- Prepare metadata spreadsheet

### Technical Checklist

- [ ] High resolution source file
- [ ] Optimized for upload
- [ ] Correct file format
- [ ] Name prepared
- [ ] Description written
- [ ] Attributes defined
- [ ] External links ready

🔥 **Action Step**: Prepare one piece of art for minting. Optimize it, write the description, and define its attributes.`
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
        ],
        content: `## Selecting Your NFT Platform

Where you sell matters. Different marketplaces attract different buyers.

### Major NFT Marketplaces

**OpenSea**:
- Largest general marketplace
- Easy to use
- Supports multiple chains
- Good for beginners
- 2.5% marketplace fee

**Blur**:
- Trader-focused
- Zero marketplace fees
- More professional/serious collectors
- Ethereum focused
- Advanced trading features

**Foundation**:
- Curated/invite model
- Higher-end art focus
- Strong community
- 5% marketplace fee
- Quality over quantity

**Rarible**:
- Multi-chain support
- Community governed
- Good for emerging artists
- Flexible fees

**SuperRare**:
- High-end digital art
- Curated artists
- Gallery feel
- 3% buyer fee + 15% first sale

### Marketplace Comparison

| Feature | OpenSea | Blur | Foundation |
|---------|---------|------|------------|
| Ease of Use | High | Medium | Medium |
| Audience | General | Traders | Art Collectors |
| Fees | 2.5% | 0% | 5% |
| Best For | Beginners | Volume | Serious Art |

### Understanding Fee Structures

**Marketplace Fees**:
- Platform's cut of each sale
- Varies from 0-5%
- Usually from seller

**Gas Fees**:
- Blockchain transaction costs
- Vary by network activity
- Can be significant on Ethereum mainnet

**Creator Royalties**:
- Your ongoing percentage
- 5-10% typical
- Not all platforms enforce

### Chain Considerations

**Ethereum Mainnet**:
- Most established
- Highest fees
- Largest collector base

**Polygon**:
- Low/no gas fees
- Growing ecosystem
- Easy for beginners

**Arbitrum** (Lumina's home):
- Low fees
- Ethereum security
- Growing NFT scene

### Audience Considerations

**Who Are You Selling To?**:
- Collectors? (Foundation, SuperRare)
- Traders? (Blur, OpenSea)
- Community members? (Platform-native markets)
- First-time buyers? (Low-fee chains)

**Where Is Your Audience?**:
- Where do they already shop?
- What chains are they on?
- What's their budget range?

### Multi-Platform Strategy

**Option 1**: Focus on one marketplace
- Build reputation there
- Become known in that community
- Simpler to manage

**Option 2**: Diversify across platforms
- Different pieces for different markets
- Broader exposure
- More management overhead

### Recommendation for Beginners

1. Start with OpenSea (easiest)
2. Use Arbitrum or Polygon (low fees)
3. Build reputation
4. Expand to other platforms later

🔥 **Action Step**: Explore 3 different NFT marketplaces. Note their vibe, featured artists, and fee structures.`
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
        ],
        content: `## Minting Step by Step

Time to put your art on the blockchain. Follow this guide carefully.

### Before You Start

**Requirements**:
- Crypto wallet (MetaMask)
- Small amount of ETH for gas
- Your prepared digital asset
- Metadata ready (name, description, traits)

### Minting Walkthrough (OpenSea Example)

**Step 1: Connect Wallet**
- Go to opensea.io
- Click "Connect wallet"
- Select MetaMask
- Approve connection

**Step 2: Create Collection (Optional)**
- Go to your profile
- Click "Create a collection"
- Add collection image and banner
- Set collection name and description
- Set royalty percentage

**Step 3: Create NFT**
- Click "Create" button
- Upload your file
- Add name and description
- Add properties/traits
- Choose collection

**Step 4: Review and Create**
- Double-check all details
- Click "Create"
- Sign the transaction in MetaMask
- Wait for confirmation

### Understanding Gas Fees

**When You Pay Gas**:
- Creating collections (sometimes)
- First sale on marketplace
- Minting on some platforms
- Listing/unlisting (varies)

**Minimizing Gas**:
- Use off-peak hours (check etherscan.io/gastracker)
- Use Layer 2s (Arbitrum, Polygon)
- Choose platforms with lazy minting

### Lazy Minting Explained

**Traditional Minting**:
- You pay gas to mint
- NFT exists on-chain immediately
- Upfront cost to you

**Lazy Minting**:
- No upfront gas cost
- NFT minted when sold
- Buyer pays minting gas
- Great for testing the market

**Platforms with Lazy Minting**:
- OpenSea (Polygon)
- Rarible
- Mintable

### Setting Up Your Listing

**Pricing Options**:
- Fixed price (set your price)
- Auction (let buyers bid)
- Dutch auction (price decreases over time)

**Duration**:
- Short (1-7 days): urgency
- Medium (1-4 weeks): standard
- Long/No expiry: patient approach

**Reserve Price**:
- Minimum acceptable bid
- Auction won't complete below it

### Post-Minting Checklist

- [ ] Verify NFT appears correctly
- [ ] Check metadata displays properly
- [ ] Test all links work
- [ ] Share on social media
- [ ] Engage with your community

### Common Minting Mistakes

- Wrong file uploaded
- Typos in name/description
- Forgetting to set royalties
- Setting price in wrong currency
- Not having enough gas

### Your First Mint Recommendation

1. Use OpenSea on Polygon (free minting)
2. Start with one piece
3. Set reasonable price
4. Learn the process
5. Then scale up

🔥 **Action Step**: Mint your first NFT on OpenSea using Polygon. Start with something simple to learn the process.`
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
        ],
        content: `## Pricing Your NFTs

Pricing is both art and science. Find the sweet spot for your work.

### The Pricing Dilemma

**Too High**:
- No sales
- Discouragement
- Perceived as out of touch

**Too Low**:
- Undervalues your work
- Hard to raise later
- Sets wrong expectation

**Just Right**:
- Sales happen
- You feel valued
- Room to grow

### Fixed Price vs Auction

**Fixed Price**:
Pros:
- Simple for buyers
- Predictable for you
- Works at any volume

Best when:
- Editions (multiple copies)
- Established pricing
- Consistent releases

**Auction**:
Pros:
- Market determines value
- Can exceed expectations
- Creates excitement

Best when:
- 1/1 pieces
- Strong existing audience
- Unique/special works

### Research-Based Pricing

**How to Research**:
1. Find artists at your level
2. Check their recent sales
3. Note their following size
4. Consider time invested
5. Factor in your uniqueness

**Data Points to Gather**:
- Average sale price in your niche
- Prices from similar follower counts
- Historical trends
- Platform-specific patterns

### The Pricing Formula

Consider these factors:
- Time invested
- Material/tool costs
- Your experience level
- Your audience size
- Market conditions
- Comparable sales

**Beginner Reality**:
- Start lower than you think
- Build collector base
- Prove consistent quality
- Raise prices gradually

### Edition Sizes

**1/1 (One of One)**:
- Unique, single piece
- Highest value per NFT
- Collector focused
- Artist statement pieces

**Limited Editions (1/10, 1/100)**:
- Multiple copies of same art
- Lower price per piece
- More accessible
- Community building

**Open Editions**:
- Unlimited copies
- Time-limited usually
- Very low prices
- Maximum reach

### Edition Pricing Strategy

| Edition Size | Typical Price Range | Best For |
|--------------|--------------------| ---------|
| 1/1 | $100-$10,000+ | Collectors |
| 1/10 | $20-$500 | Serious fans |
| 1/100 | $5-$100 | Community |
| Open | $1-$20 | Reach |

### Dynamic Pricing

**Starting Low, Raising**:
- First sales at low price
- Raise with each sale
- Rewards early buyers
- Creates urgency

**Tiered Pricing**:
- First 10: lowest price
- Next 10: higher
- And so on

### Price Psychology

- Round numbers feel "set"
- .99 endings feel retail
- .42 or .69 feel personal
- Match your brand

🔥 **Action Step**: Research 10 NFT artists at your level. Note their prices, editions, and sales. Create your pricing framework.`
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
        ],
        content: `## Getting Your NFTs Seen

Creating is half the battle. The other half is getting the right eyes on your work.

### Building Collector Relationships

**Collectors Are People**:
- They want connection, not just art
- They invest in artists, not just pieces
- They want to feel part of something

**How to Build Relationships**:
- Engage with their content
- Remember their purchases
- Offer exclusive access
- Share your process

### Social Media Strategy

**Primary Platform**: Twitter/X
- NFT community headquarters
- Collectors actively browse
- Engagement = visibility

**Secondary**: Instagram
- Visual showcase
- Behind the scenes
- Broader audience

**Emerging**: Farcaster, Lens
- Web3-native social
- Crypto-focused audience
- Early adopter advantage

### Effective Twitter/X Approach

**Content Mix**:
- 40% Art/process
- 30% Engagement with others
- 20% Personal/personality
- 10% Direct sales posts

**Best Practices**:
- Post when audience is active
- Use relevant hashtags
- Quote retweet with value
- Join Twitter Spaces

### The Power of Process

**Share Your Journey**:
- Work in progress shots
- Time-lapse videos
- Behind-the-scenes
- Challenges and learnings

**Why It Works**:
- Humanizes you
- Creates anticipation
- Shows skill and effort
- Builds emotional connection

### Community Engagement

**Where to Engage**:
- Artist Discord servers
- NFT project communities
- Twitter/X threads
- In-person events

**How to Engage**:
- Be genuinely helpful
- Support other artists
- Share knowledge
- Avoid constant self-promotion

### Pre-Launch Strategy

**2-4 Weeks Before**:
- Tease the upcoming drop
- Share process content
- Build anticipation
- Engage more than usual

**1 Week Before**:
- Reveal more details
- Announce date/time
- Remind daily
- Answer questions

**Day Of**:
- Multiple reminder posts
- Be available to engage
- Celebrate sales publicly
- Thank your collectors

### Post-Sale Relationship

**After Someone Buys**:
- Thank them publicly
- Thank them privately
- Keep them updated
- Offer early access to future work

**Building Repeat Collectors**:
- Collector-only perks
- Early access
- Special editions
- Personal touches

### Common Marketing Mistakes

- Only posting when selling
- Ignoring other artists
- Being transactional
- Inconsistent presence
- Not engaging with buyers

🔥 **Action Step**: Create a 7-day content calendar leading up to your next NFT drop. Include process, engagement, and announcements.`
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
        ],
        content: `## The Royalty Advantage

Royalties are revolutionary for creators. Get paid every time your work resells.

### How Royalties Work

**Traditional Art Sale**:
- Artist sells for $100
- Collector resells for $1000
- Artist gets $0 from resale

**NFT Royalty Model**:
- Artist sells for $100
- Sets 10% royalty
- Collector resells for $1000
- Artist automatically receives $100

### Setting Royalty Percentages

**Common Rates**:
- 5% (standard)
- 7.5% (moderate)
- 10% (higher end)

**Factors to Consider**:
- Higher royalty = more per sale
- Higher royalty = less attractive to traders
- Industry standard is 5-10%

**Recommendation**: Start with 5-7.5%

### Marketplace Royalty Reality

**The Challenge**:
Not all marketplaces enforce royalties equally.

**Full Enforcement**:
- Foundation
- SuperRare
- Some curated platforms

**Optional/Negotiable**:
- OpenSea (now optional)
- Blur (optional)
- Many others

**Protecting Your Royalties**:
- Use platforms that enforce
- Build direct relationships
- Create collector incentives
- Consider on-chain enforcement

### Long-Term Royalty Strategy

**Building Royalty Value**:
- Create demand for your work
- Encourage trading/collecting
- Build community around your art
- Price for long-term gains

**Example Projection**:
- 100 NFTs sold at $50
- Average 2 resales each over time
- 5% royalty at average $75 resale
- = $750 passive income

### Alternative Revenue Streams

**Beyond Royalties**:
- Commissions for collectors
- Print sales of NFT art
- Merchandise
- Physical companion pieces
- Experiences and access

### Building Collector Communities

**Why Community Matters**:
- Collectors trade with each other
- Community = more resales
- More resales = more royalties

**How to Build**:
- Discord for collectors
- Exclusive content access
- Early access to new work
- Collector events (virtual/IRL)

### Tax Considerations

**Important Note**:
Royalty income is taxable.

**Keep Records Of**:
- All royalty payments
- Original sale prices
- Platform fees paid
- Business expenses

**Consult a professional** for your specific situation.

### Long-Term Thinking

**The Compounding Effect**:
- Early work keeps earning
- More pieces = more potential
- Growing reputation = higher resales
- Time in market matters

🔥 **Action Step**: Calculate potential royalty income from your next 10 NFT sales with various resale scenarios.`
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
        ],
        content: `## From Pieces to Collections

Cohesive collections create stronger narratives and more engaged collectors.

### What Makes a Collection?

**More Than Random Art**:
- Unified theme or story
- Consistent style elements
- Planned rarity/variations
- Clear collector appeal

**Collection Benefits**:
- Easier to market
- Collectors "collect"
- Higher perceived value
- Community building

### Collection Themes

**Thematic Approaches**:
- Story-based (narrative collection)
- Style-based (aesthetic variations)
- Trait-based (generative/PFP)
- Series-based (ongoing releases)

**Questions to Answer**:
- What connects these pieces?
- Why would someone want multiple?
- What's the story/concept?
- How does it evolve?

### Planning Your Collection

**Size Considerations**:
- Small (10-50): Intimate, rare
- Medium (100-500): Community, accessible
- Large (1000+): Generative, mass appeal

**Trait System** (for larger collections):
- Define categories (background, body, accessory)
- Create variations per category
- Plan rarity distribution
- Ensure all combinations work

### Release Strategies

**All at Once**:
- Big launch event
- Maximum hype
- FOMO factor
- Stressful but exciting

**Rolling Release**:
- Pieces over time
- Sustained engagement
- Less pressure
- Longer campaign

**Epochs/Chapters**:
- Phases with themes
- Story progression
- Multiple hype cycles
- Collector retention

### Roadmap Planning

**What is a Roadmap?**:
Promises of what you'll deliver over time.

**Common Roadmap Items**:
- Physical prints for holders
- Future collections
- Community events
- Collaborations
- Token/utility evolution

**Roadmap Caution**:
- Only promise what you can deliver
- Be realistic about timeline
- Under-promise, over-deliver
- Avoid feature creep

### Pre-Launch Preparation

**Before You Launch**:
- All art complete and checked
- Metadata verified
- Pricing finalized
- Marketing plan ready
- Community informed

**Technical Checklist**:
- Smart contract tested (if custom)
- Reveal mechanism ready (if hidden)
- Website/landing page live
- Wallet list prepared (if allowlist)

### Launch Day Execution

**The Big Day**:
- Be online and responsive
- Monitor for issues
- Engage with mints publicly
- Handle problems quickly
- Celebrate with community

### Post-Launch

**After Launch**:
- Thank all collectors
- Deliver on promises
- Continue community building
- Plan next moves
- Learn from experience

### Congratulations!

You've completed "Your First NFT"!

You now know how to:
- Understand NFT value
- Prepare artwork properly
- Choose the right marketplace
- Mint and price your NFTs
- Market effectively
- Set up royalties
- Plan collections

🔥 **Final Action Step**: Plan a 5-piece mini collection. Define the theme, prepare the art, and create a launch timeline.`
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
        ],
        content: `## Understanding Decentralized Finance

DeFi rebuilds financial services without banks or intermediaries. It's finance by code.

### Traditional vs Decentralized Finance

**Traditional Finance (TradFi)**:
- Banks hold your money
- Institutions control access
- Slow settlement (days)
- Business hours only
- Geographic restrictions
- Identity required

**Decentralized Finance (DeFi)**:
- You hold your money
- Open to anyone
- Fast settlement (seconds-minutes)
- 24/7/365 operation
- Global access
- Pseudonymous

### Smart Contracts in Finance

**What They Are**:
Self-executing code that runs financial operations automatically.

**What They Do**:
- Hold and transfer funds
- Execute trades
- Calculate interest
- Distribute rewards
- Enforce agreements

**The Advantage**:
- No human intervention needed
- Rules can't be changed arbitrarily
- Transparent and auditable
- Trustless operation

### Key DeFi Principles

**Composability** ("Money Legos"):
- DeFi protocols connect to each other
- Build complex strategies
- Combine services freely

**Permissionless**:
- Anyone can use
- No application required
- No minimum amounts

**Non-Custodial**:
- You control your funds
- No third party holds your money
- Your keys, your crypto

**Transparent**:
- All code is open source
- All transactions are public
- Anyone can audit

### Main DeFi Categories

**Trading**: Decentralized exchanges (DEXs)
**Lending**: Borrow and lend crypto
**Staking**: Earn rewards on locked tokens
**Yield**: Earn returns on deposits
**Insurance**: Protect against smart contract risks
**Derivatives**: Options, futures, synthetic assets

### The DeFi Advantage for Creators

**Why Creators Care**:
- Receive payments instantly
- Keep more earnings (no intermediary fees)
- Global audience access
- Programmatic revenue streams
- Token-based monetization

🔥 **Action Step**: Explore DeFiLlama.com to see the scope of DeFi. Note the Total Value Locked (TVL) across protocols.`
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
        ],
        content: `## Trading on Decentralized Exchanges

DEXs let you trade tokens directly from your wallet. No accounts, no permissions.

### How DEXs Work

**Traditional Exchange**:
- Order book matches buyers/sellers
- Company runs the exchange
- Account required
- Centralized custody

**DEX (Automated Market Maker)**:
- Liquidity pools set prices
- Smart contracts run everything
- Wallet connection only
- You keep custody

### AMM Mechanics

**Automated Market Makers Explained**:

Instead of order books, DEXs use liquidity pools:
- Pools contain pairs of tokens (e.g., ETH/USDC)
- Price determined by ratio in pool
- Trades change the ratio

**The Constant Product Formula**:
x × y = k

Where:
- x = amount of token A
- y = amount of token B
- k = constant value

As you buy token A, its supply decreases, price increases.

### Swapping Tokens

**The Process**:
1. Connect wallet to DEX
2. Select tokens (from/to)
3. Enter amount
4. Review rate and fees
5. Approve token (first time only)
6. Confirm swap
7. Transaction processes

**Popular DEXs**:
- Uniswap (Ethereum/Arbitrum)
- Camelot (Arbitrum native)
- SushiSwap (multi-chain)
- Curve (stablecoins)

### Slippage and Price Impact

**Slippage**:
Difference between expected and actual trade price.

**Causes**:
- Large trade relative to pool
- Fast-moving markets
- Low liquidity

**Setting Slippage Tolerance**:
- 0.5%: Very tight (may fail)
- 1%: Standard for stable trades
- 3-5%: Volatile tokens
- Higher: Risky, may be exploited

**Price Impact**:
How much your trade moves the price.

**Low Price Impact**: Trade is small relative to pool
**High Price Impact**: Trade significantly moves price

### Practical Trading Tips

**Before Trading**:
- Check multiple DEXs for best rate
- Use aggregators (1inch, Paraswap)
- Verify token contract address
- Consider gas costs

**During Trading**:
- Set appropriate slippage
- Review all details before confirming
- Don't rush large trades

🔥 **Action Step**: Make a small swap on a DEX (like Camelot on Arbitrum). Note the price impact and fees.`
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
        ],
        content: `## Earning Through Staking

Staking puts your tokens to work. Lock them up, earn rewards.

### How Staking Works

**The Basic Concept**:
- Lock your tokens in a protocol
- Protocol uses them (various purposes)
- You earn rewards over time
- Unlock to retrieve tokens

**Why Protocols Offer Staking**:
- Security (Proof of Stake networks)
- Governance participation
- Liquidity commitment
- Reduce circulating supply
- Community alignment

### Types of Staking

**Network Staking**:
- Secure the blockchain itself
- Usually higher minimums
- Validators or delegators
- Example: Ethereum staking

**Protocol Staking**:
- Lock tokens in specific protocol
- Earn protocol tokens
- Usually lower minimums
- Example: AXM staking on Lumina

**Liquid Staking**:
- Stake and receive derivative token
- Maintain liquidity while staked
- Example: stETH for ETH

### APY Calculations

**APR vs APY**:
- APR: Annual Percentage Rate (simple interest)
- APY: Annual Percentage Yield (compound interest)

**APY Formula**:
APY = (1 + r/n)^n - 1
Where r = rate, n = compounding periods

**Example**:
- 10% APR compounded daily
- APY ≈ 10.52%

**What Affects Rewards**:
- Amount staked
- Total staked in pool
- Token emissions
- Lock period multipliers

### Lock Periods and Risks

**Lock Period Trade-offs**:
| Duration | Rewards | Flexibility |
|----------|---------|-------------|
| No lock | Lower | High |
| 30 days | Medium | Medium |
| 90+ days | Higher | Low |

**Risks to Consider**:
- **Price Risk**: Token value can drop while locked
- **Smart Contract Risk**: Bugs or exploits
- **Opportunity Cost**: Can't use tokens elsewhere
- **Lock Risk**: Can't exit during crashes

### Staking Strategies

**Conservative**:
- No-lock or short-lock only
- Blue-chip tokens
- Established protocols

**Moderate**:
- Mix of lock periods
- Diversified protocols
- Balance rewards and flexibility

**Aggressive**:
- Long lock periods
- New protocols
- Maximum yield

🔥 **Action Step**: Calculate potential staking rewards for 100 AXM over 30 days at current rates.`
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
        ],
        content: `## Staking AXM: Step by Step

Put your AXM to work earning rewards on Lumina.

### Before You Start

**Requirements**:
- MetaMask connected to Arbitrum
- AXM tokens in your wallet
- Small amount of ETH for gas

### The Staking Interface

**Finding Staking**:
1. Navigate to Lumina staking page
2. Connect your wallet
3. View current staking stats

**Key Information Displayed**:
- Current APY
- Total AXM staked
- Your staking balance
- Pending rewards
- Lock options

### Staking Walkthrough

**Step 1: Choose Lock Period**
- Longer locks = higher multiplier
- Consider your liquidity needs
- No-lock option available

**Step 2: Enter Amount**
- Input AXM amount to stake
- Or click "Max" for all
- Leave some for gas

**Step 3: Approve (First Time)**
- Approve AXM spending
- One-time per token
- Confirm in MetaMask

**Step 4: Stake**
- Review transaction details
- Click "Stake"
- Confirm in MetaMask
- Wait for confirmation

### Reward Claiming

**How Rewards Accrue**:
- Rewards accumulate continuously
- Claimable anytime
- No minimum to claim

**Claiming Process**:
1. View pending rewards
2. Click "Claim Rewards"
3. Confirm transaction
4. Rewards sent to wallet

**Claiming Tips**:
- Batch claims if rewards are small
- Consider gas costs vs reward size
- Compound by restaking

### Unstaking Process

**For No-Lock Stakes**:
1. Click "Unstake"
2. Enter amount
3. Confirm transaction
4. Tokens returned immediately

**For Locked Stakes**:
- Must wait until lock expires
- Early unlock may have penalties
- Plan your lock periods

### Compounding Strategy

**Manual Compounding**:
1. Claim rewards
2. Stake claimed tokens
3. Repeat periodically

**Optimal Frequency**:
- Higher APY = compound more often
- Consider gas costs
- Weekly is often efficient

### Common Issues

**Transaction Stuck**:
- Increase gas price
- Wait or cancel/retry

**Rewards Not Showing**:
- Refresh the page
- Check block explorer
- Small delay is normal

🔥 **Action Step**: Stake a small amount of AXM. Practice the full cycle: stake, earn, claim, unstake.`
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
        ],
        content: `## Providing Liquidity

Liquidity providers power DEXs. In return, they earn trading fees.

### Liquidity Pools Explained

**What is a Liquidity Pool?**:
A smart contract holding paired tokens that enables trading.

**Example: ETH/USDC Pool**:
- Contains ETH and USDC
- Traders swap between them
- Pool maintains balance

**How You Earn**:
- Traders pay fees (0.3% typical)
- Fees distributed to LPs
- Proportional to your share

### Adding Liquidity

**The Process**:
1. Choose a pool (e.g., AXM/ETH)
2. Deposit both tokens in ratio
3. Receive LP tokens
4. Earn fees over time

**Key Requirement**:
You must deposit BOTH tokens in the pool's current ratio.

**Example**:
If pool is 50% AXM / 50% ETH by value:
- Deposit $500 worth of AXM
- AND $500 worth of ETH
- Total = $1000 position

### LP Tokens

**What Are LP Tokens?**:
Receipt tokens proving your pool share.

**They Represent**:
- Your portion of the pool
- Your claim on deposited tokens
- Your share of earned fees

**Important**:
- Keep LP tokens safe
- Needed to withdraw liquidity
- Can sometimes be staked for extra rewards

### Removing Liquidity

**The Process**:
1. Select pool to exit
2. Enter LP tokens to redeem
3. Receive both tokens back
4. (Plus accumulated fees)

**What You Get Back**:
- May differ from what you deposited
- Due to price changes (impermanent loss)
- Fees are included automatically

### Choosing Pools

**Factors to Consider**:
- Trading volume (more volume = more fees)
- TVL (Total Value Locked)
- Token volatility
- Fee tier (varies by pool)
- Additional incentives

**Higher Fee Pools**:
- More volatile pairs
- Higher risk, higher reward

**Lower Fee Pools**:
- Stable pairs (USDC/DAI)
- Lower risk, lower reward

### LP Risks

**Main Risks**:
1. Impermanent loss (next lesson)
2. Smart contract risk
3. Token price risk
4. Low volume = low fees

### Practical Example

**$1000 into AXM/ETH Pool**:
- Deposit $500 AXM + $500 ETH
- Pool gives 0.3% per trade
- If pool does $100k/day volume
- Your daily share: ~$0.30 (depends on pool size)
- Annualized: ~$100+ in fees

🔥 **Action Step**: Explore the liquidity pools on Lumina's exchange. Compare APYs and volumes.`
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
        ],
        content: `## Understanding Impermanent Loss

Impermanent loss (IL) is the hidden cost of providing liquidity. Every LP must understand it.

### How Impermanent Loss Happens

**The Scenario**:
You deposit equal values of two tokens.
One token's price changes significantly.
Your position is worth less than if you'd just held.

**Why It Happens**:
- AMMs maintain constant product
- As prices change, pools rebalance
- Arbitrageurs trade to restore prices
- Your token ratios shift

### Calculating IL

**The Formula**:
IL = 2 × √(price_ratio) / (1 + price_ratio) - 1

**Quick Reference Table**:
| Price Change | Impermanent Loss |
|--------------|------------------|
| 1.25x (25%) | 0.6% |
| 1.5x (50%) | 2.0% |
| 2x (100%) | 5.7% |
| 3x (200%) | 13.4% |
| 4x (300%) | 20.0% |
| 5x (400%) | 25.5% |

**Important Notes**:
- Loss is the same whether price goes up OR down
- Both tokens moving = different calculation
- IL is "impermanent" until you withdraw

### Why "Impermanent"?

**If Prices Return**:
- IL disappears
- You're back to original value
- Fees earned are pure profit

**If You Withdraw**:
- IL becomes permanent
- Locked in the loss
- Called "realized IL"

### IL vs Holding

**Example**:
- Start: $500 ETH + $500 USDC = $1000
- ETH doubles in price

**If You Held**:
$1000 ETH + $500 USDC = $1500

**In LP**:
Value ≈ $1414 (after IL)
IL ≈ $86 (5.7%)

**But Wait**:
LP also earned trading fees!
If fees > IL, you still profit.

### IL Mitigation Strategies

**Strategy 1: Similar-Price Tokens**
- Stablecoin pairs (USDC/USDT)
- Same-asset pairs (stETH/ETH)
- Minimal price divergence

**Strategy 2: High-Volume Pools**
- More fees to offset IL
- Active trading = active earning

**Strategy 3: Concentrated Liquidity**
- Some DEXs allow price ranges
- Earn more fees in your range
- But IL risk is higher if out of range

**Strategy 4: Long-Term View**
- Prices may revert
- Fees compound over time
- IL is only realized at withdrawal

### When LP Still Makes Sense

**Good Candidates**:
- You believe both tokens long-term
- Pool has high volume
- Additional incentives (farming rewards)
- You're happy with either token

**Avoid**:
- One token you expect to moon
- Low volume pools
- No additional incentives
- Short time horizons

🔥 **Action Step**: Use an IL calculator (search "impermanent loss calculator"). Model scenarios for tokens you hold.`
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
        ],
        content: `## Maximizing DeFi Yields

Yield farming combines DeFi strategies to maximize returns.

### Farming vs Staking

**Single-Asset Staking**:
- Lock one token
- Earn rewards in same or different token
- Simpler, lower risk
- Lower returns typically

**Yield Farming**:
- Multiple strategies combined
- LP + staking + incentives
- More complex
- Higher potential returns
- Higher risk

### Basic Farming Strategy

**The Flow**:
1. Provide liquidity (get LP tokens)
2. Stake LP tokens in farm
3. Earn farming rewards
4. Compound rewards
5. Repeat

**Example**:
- Add AXM/ETH liquidity → Get LP tokens
- Stake LP in farm → Earn AXM rewards
- Stake earned AXM → Earn more AXM
- Compound weekly

### Compounding Strategies

**Manual Compounding**:
1. Claim rewards regularly
2. Reinvest into position
3. Grows exponentially

**Auto-Compounding Vaults**:
- Protocols compound for you
- Small fee for convenience
- More gas-efficient

**Optimal Frequency**:
- Higher APY = compound more often
- Balance gas costs
- Daily to weekly typical

### Risk-Adjusted Returns

**Don't Chase Highest APY**:
High APY often means:
- New, unproven protocol
- Risky token pair
- Unsustainable emissions
- Hidden risks

**Calculate Real Returns**:
Advertised APY - IL - Gas - Fees - Risk = Real Return

### Conservative Strategy

**Approach**:
- Blue-chip tokens only (ETH, BTC, stablecoins)
- Established protocols (1+ year track record)
- Lower APY (5-20%)
- Minimal IL risk

**Example Portfolio**:
- 50% Stablecoin lending
- 30% ETH staking
- 20% Blue-chip LP

### Moderate Strategy

**Approach**:
- Mix of stable and volatile
- Established + newer protocols
- Medium APY (20-50%)
- Some IL exposure

**Example Portfolio**:
- 30% Stablecoins
- 40% Single-asset staking
- 30% Volatile LP with incentives

### Aggressive Strategy

**Approach**:
- High-emission new protocols
- Volatile pairs
- High APY (50%+)
- Significant IL exposure
- Active management required

**Warning**:
- Higher APY = higher risk
- Many farms go to zero
- Not for beginners

### Tracking Your Farm

**What to Monitor**:
- Position value over time
- Rewards accumulated
- Token prices (IL check)
- Protocol health

**Tools**:
- DeBank (portfolio tracking)
- Zapper (DeFi dashboard)
- Protocol native interfaces

🔥 **Action Step**: Design a farming strategy matching your risk tolerance. Start with one position to learn.`
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
        ],
        content: `## Evaluating DeFi Safety

Before depositing, assess the risks. Your money depends on it.

### Smart Contract Audits

**Why Audits Matter**:
- Code can have bugs
- Exploits can drain funds
- Audits find vulnerabilities

**What to Look For**:
- Who audited? (Trail of Bits, OpenZeppelin, Consensys)
- When? (Recent is better)
- Findings? (Were issues fixed?)
- Multiple audits better than one

**Where to Find**:
- Protocol docs/website
- GitHub repositories
- DeFi Safety scores

**Red Flags**:
- No audit
- Unknown auditor
- Unfixed critical issues

### TVL and Liquidity

**Total Value Locked (TVL)**:
Total assets deposited in protocol.

**What It Signals**:
- Higher = more trust
- Higher = battle tested
- Higher = bigger target too

**Considerations**:
- New protocols have low TVL (chicken/egg)
- Sudden TVL drops = warning
- Check TVL trend over time

**Liquidity Depth**:
How easily can you exit?
- Deep liquidity = easy exit
- Shallow = slippage on exit
- Important for larger positions

### Team and Track Record

**Known Team**:
- Names and faces public
- LinkedIn/Twitter presence
- Past projects known
- More accountable

**Anonymous Team**:
- Not automatically bad
- But higher risk
- Code should speak louder

**Track Record**:
- Previous successful projects?
- How long in space?
- Reputation in community?

### Red Flags Checklist

**Immediate Concerns**:
- [ ] No audit
- [ ] Anonymous team + new
- [ ] Promises unrealistic returns (1000% APY)
- [ ] Pressure to deposit quickly
- [ ] Can't find source code
- [ ] No documentation
- [ ] Small Twitter/Discord
- [ ] Recent contract deployment

**Warning Signs**:
- Copied code without attribution
- Admin keys can drain funds
- No timelock on upgrades
- Single point of failure

### Due Diligence Process

**Before Depositing**:
1. Read the documentation
2. Check for audits
3. Review TVL and trends
4. Research team
5. Check community sentiment
6. Start with small amount
7. Monitor regularly

### Protocol Risk Tiers

**Lower Risk**:
- 2+ years operating
- Multiple audits
- Large TVL
- Known team
- Battle tested

**Medium Risk**:
- 6-24 months operating
- Audited
- Growing TVL
- Some track record

**Higher Risk**:
- Less than 6 months
- Single or no audit
- Low TVL
- New team
- High APY

🔥 **Action Step**: Pick a DeFi protocol you're considering. Research it using this checklist.`
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
        ],
        content: `## Staying Safe in DeFi

DeFi security requires active management. Protect your positions.

### Understanding Approvals

**What Are Token Approvals?**:
Permission you give smart contracts to spend your tokens.

**Types of Approvals**:
- **Exact Amount**: Only approved amount
- **Unlimited**: Any amount, forever

**The Problem**:
Unlimited approvals stay active.
If contract is compromised, all approved tokens at risk.

### Managing Approvals

**Check Your Approvals**:
- revoke.cash
- Etherscan token approvals
- DeBank approvals page

**What You'll See**:
- Which contracts you've approved
- For which tokens
- The approval amount
- When it was granted

### Revoking Permissions

**When to Revoke**:
- Done using a protocol
- Protocol had security issue
- Spring cleaning
- Large, old approvals

**How to Revoke**:
1. Go to revoke.cash
2. Connect wallet
3. Find approval to remove
4. Click "Revoke"
5. Confirm transaction (costs gas)

**Best Practice**:
Review approvals monthly.
Revoke anything you're not actively using.

### Transaction Simulation

**What It Does**:
Shows you exactly what will happen before you sign.

**Tools**:
- Pocket Universe (browser extension)
- Fire (wallet extension)
- Tenderly (advanced)

**What They Show**:
- Token transfers
- Approvals being granted
- Contract interactions
- Potential red flags

### Security Best Practices

**Wallet Hygiene**:
- Dedicated DeFi wallet
- Small amount for active use
- Large holdings in cold storage
- Never use "main" wallet for experiments

**Before Every Transaction**:
1. Verify URL is correct
2. Check contract address
3. Review approval amount
4. Simulate if available
5. Understand what you're signing

### Common DeFi Attack Vectors

**Phishing**:
- Fake sites
- Malicious token approvals
- Look-alike protocols

**Contract Exploits**:
- Flash loan attacks
- Reentrancy
- Price manipulation

**Rug Pulls**:
- Team disappears with funds
- Hidden admin functions
- Usually in new protocols

### Emergency Response

**If You Think You're Compromised**:
1. Revoke ALL approvals immediately
2. Transfer funds to new wallet
3. Don't interact with suspicious tokens
4. Report to community
5. Document everything

### Building Good Habits

**Daily**:
- Check active positions
- Verify no unexpected transactions

**Weekly**:
- Review any new approvals
- Check protocol news

**Monthly**:
- Full approval audit
- Portfolio review
- Security checkup

🔥 **Action Step**: Visit revoke.cash. Review and clean up your token approvals.`
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
        ],
        content: `## Creating Your DeFi Strategy

Time to build a complete DeFi portfolio that matches your goals.

### Diversification Principles

**Protocol Diversification**:
Don't put everything in one protocol.
If it's exploited, you lose everything.

**Strategy Diversification**:
Mix different approaches:
- Some staking
- Some LP
- Some lending
- Some stable yields

**Chain Diversification**:
Consider multiple chains:
- Arbitrum (where Lumina lives)
- Ethereum mainnet
- Other L2s

### Sample Portfolios

**Conservative Portfolio**:
- 40% Stablecoin lending (5-10% APY)
- 30% Blue-chip staking (5-15% APY)
- 20% Stable LP (10-20% APY)
- 10% Cash for opportunities

**Balanced Portfolio**:
- 25% Stablecoins
- 25% Single-asset staking
- 30% LP positions
- 15% Yield farming
- 5% Experimental

**Aggressive Portfolio**:
- 40% High-APY farming
- 30% Volatile LP
- 20% Leveraged positions
- 10% New protocol incentives

### Rebalancing Strategies

**Why Rebalance?**:
- Portfolios drift over time
- Winners become too large
- Risk profile changes
- Lock in gains

**When to Rebalance**:
- Monthly (conservative)
- Weekly (active)
- When positions drift 10%+ from target
- After major market moves

**How to Rebalance**:
1. Calculate current allocation
2. Compare to target
3. Sell overweight positions
4. Buy underweight positions
5. Account for gas costs

### Tracking Tools

**Portfolio Trackers**:
- DeBank (comprehensive)
- Zapper (nice UI)
- Zerion (multi-chain)

**Yield Trackers**:
- DeFiLlama Yields
- Vfat.tools
- Coindix

**Spreadsheet Method**:
- Google Sheets
- Manual tracking
- Full control
- More work

### Managing Risk

**Position Sizing**:
Never put more than you can lose.
- 10-20% max in any single protocol
- 5% max in experimental
- Size by conviction and risk

**Stop Loss Thinking**:
Mental exit points:
- If TVL drops by X%
- If team goes quiet
- If bad news emerges
- If APY becomes unsustainable

### Your DeFi Journey

**Beginner Phase** (Month 1-3):
- Learn with small amounts
- Single-asset staking first
- One or two protocols
- Focus on education

**Growth Phase** (Month 3-6):
- Expand to LP
- Add more protocols
- Develop strategies
- Track performance

**Mature Phase** (6+ months):
- Sophisticated strategies
- Multiple chains
- Active management
- Compound expertise

### Congratulations!

You've completed "Understanding DeFi"!

You now know:
- DeFi fundamentals
- DEX trading
- Staking mechanics
- Liquidity provision
- Impermanent loss
- Yield farming
- Risk assessment
- Security practices
- Portfolio building

🔥 **Final Action Step**: Create your first DeFi portfolio plan. Start with one conservative position.`
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
        ],
        content: `## Understanding DAOs

DAOs are reinventing how organizations work. Welcome to governance without bosses.

### What is a DAO?

**DAO = Decentralized Autonomous Organization**

**Decentralized**: No single point of control
**Autonomous**: Rules enforced by code
**Organization**: People coordinating toward goals

**The Simple Version**:
A DAO is a group of people who govern a project together using token-based voting.

### Traditional vs DAO Structure

**Traditional Company**:
- CEO makes decisions
- Board of directors
- Employees follow orders
- Shareholders have limited voice
- Closed financial books

**DAO Structure**:
- Token holders vote on decisions
- No central leadership (usually)
- Contributors are rewarded
- All holders can participate
- Transparent treasury

### Types of DAOs

**Protocol DAOs**:
- Govern DeFi protocols
- Vote on upgrades, fees, parameters
- Examples: Uniswap, Aave, Compound

**Investment DAOs**:
- Pool funds for investments
- Members vote on deals
- Share returns proportionally

**Social DAOs**:
- Community and membership focused
- Access and experiences
- Example: Friends with Benefits

**Service DAOs**:
- Collectives of professionals
- Work for clients together
- Share earnings

**Media DAOs**:
- Create content collectively
- Share ownership of work
- Example: BanklessDAO

### Smart Contract Governance

**How It Works**:
- Proposals are on-chain
- Votes are recorded on blockchain
- Results automatically execute
- No one can override the outcome

**The Advantage**:
- Trustless execution
- Transparent process
- Immutable records
- Global participation

### Token-Based Voting

**Governance Tokens**:
Tokens that grant voting power in a DAO.

**Common Models**:
- 1 token = 1 vote (most common)
- Quadratic voting (reduces whale power)
- Conviction voting (time-weighted)
- Holographic consensus (prediction market)

**AXM in Lumina**:
- AXM token holders can vote on proposals
- More AXM = more voting power
- Participate in platform governance

🔥 **Action Step**: Explore 3 DAOs. Note their type, governance token, and recent proposals.`
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
        ],
        content: `## Tokens as Power

Governance tokens are your voice in a DAO. Understand how they work.

### Voting Power Calculation

**Basic Model: 1 Token = 1 Vote**
- 100 AXM = 100 votes
- Simple and clear
- Whales have more power

**Variations**:
- **Staked voting**: Only staked tokens count
- **Time-weighted**: Longer holding = more power
- **Capped voting**: Maximum per wallet
- **Snapshot voting**: Power at specific block

### The Snapshot Concept

**What is a Snapshot?**:
- Recording of all balances at a specific block
- Your voting power is locked at that moment
- Prevents last-minute token buying

**Why It Matters**:
- Buy tokens after snapshot = no votes
- Sell tokens after snapshot = still can vote
- Fair and predictable

### Delegation

**What is Delegation?**:
Giving your voting power to someone else.

**Why Delegate?**:
- Too busy to vote on everything
- Trust another person's judgment
- Still participate without research

**How Delegation Works**:
1. Choose a delegate
2. Assign your voting power
3. They vote on your behalf
4. You can change or revoke anytime

**Lumina Delegation**:
AXM holders can delegate voting power while keeping their tokens.

### Token Distribution Models

**Fair Launch**:
- No pre-mine or team allocation
- Everyone starts equal
- Distributed through usage

**Venture-Backed**:
- Investors get large allocation
- Team keeps significant portion
- Users get smaller share
- Watch for unlock schedules

**Airdrop Model**:
- Tokens given to early users
- Rewards past participation
- Builds community fast

**Community-First**:
- Majority to community
- Small team allocation
- Long-term alignment

### Understanding Tokenomics

**What to Research**:
- Total supply
- Circulating supply
- Team/investor vesting
- Emission schedule
- Burn mechanics

**Red Flags**:
- 50%+ to team/investors
- Short vesting periods
- Ability to mint unlimited
- Centralized control

### Strategic Considerations

**Building Voting Power**:
- Accumulate before proposals you care about
- Consider delegation to amplify voice
- Join voting blocks/coalitions

**Voter Responsibilities**:
- Research before voting
- Consider long-term health of DAO
- Participate regularly

🔥 **Action Step**: Check your AXM balance. Calculate your current voting power in Lumina governance.`
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
        ],
        content: `## Analyzing Proposals

Good governance requires informed voting. Learn to evaluate proposals critically.

### Anatomy of a Proposal

**Standard Components**:
- **Title**: Clear, descriptive name
- **Summary**: Brief overview
- **Motivation**: Why this proposal?
- **Specification**: Detailed description
- **Implementation**: Technical details
- **Timeline**: When would it happen?
- **Budget**: Any costs involved?

### Questions to Ask

**About the Problem**:
- Is this a real issue?
- How urgent is it?
- Who is affected?

**About the Solution**:
- Does this actually solve the problem?
- Are there simpler alternatives?
- What could go wrong?

**About the Proposer**:
- Who is behind this?
- What's their track record?
- Do they have conflicts of interest?

### Impact Assessment

**Consider All Stakeholders**:
- Token holders
- Users
- Developers
- Partners
- Broader ecosystem

**Types of Impact**:
- **Financial**: Treasury, token value
- **Technical**: Security, complexity
- **Community**: Culture, inclusivity
- **Reputation**: How outsiders perceive

### Hidden Implications

**Look for**:
- Unintended consequences
- Power shifts
- Precedent setting
- Long-term commitments

**Common Issues**:
- Vague language (open to interpretation)
- Missing details
- Irreversible decisions
- Scope creep potential

### Red Flags in Proposals

**Concerning Signs**:
- Rushed timeline
- No discussion period
- Significant treasury impact
- Benefits small group
- Unusual governance changes
- Attack on other members

### Discussion Phase

**Before Voting**:
- Read community comments
- Check governance forums
- Attend community calls
- Ask questions directly

**Valuable Perspectives**:
- Technical reviewers
- Long-term members
- Subject matter experts
- Devil's advocates

### Your Voting Criteria

**Develop Your Framework**:
- What values guide your votes?
- What's your risk tolerance?
- Long-term vs short-term focus?
- Active participation vs delegation?

### When to Abstain

**Valid Reasons**:
- Insufficient understanding
- Clear conflict of interest
- Proposal is unclear
- Need more information

🔥 **Action Step**: Find an active proposal in any DAO. Analyze it using this framework.`
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
        ],
        content: `## Voting Step by Step

Time to make your voice heard. Here's how to vote in DAO governance.

### Before You Vote

**Requirements**:
- Wallet with governance tokens
- Tokens held before snapshot (if applicable)
- Understanding of the proposal
- Small amount of ETH for gas (on-chain voting)

### Voting Interface Walkthrough

**Common Voting Platforms**:
- Snapshot (off-chain, gas-free)
- Tally (on-chain)
- Boardroom (aggregator)
- Native DAO interfaces

### Snapshot Voting (Gas-Free)

**The Process**:
1. Go to snapshot.org
2. Find your DAO space
3. Connect wallet
4. Select active proposal
5. Read proposal details
6. Choose your vote (For/Against/Abstain)
7. Sign message (no gas)
8. Vote recorded

**Benefits**:
- No transaction fees
- Simple interface
- Off-chain but verifiable

### On-Chain Voting

**The Process**:
1. Go to governance interface
2. Connect wallet
3. Select proposal
4. Review your voting power
5. Choose your vote
6. Confirm transaction
7. Pay gas fee
8. Wait for confirmation

**Benefits**:
- Votes execute automatically
- Maximum trustlessness
- Permanent on-chain record

### Vote Delegation

**Delegating Your Vote**:
1. Find delegation interface
2. Search for delegate address
3. Assign your voting power
4. Confirm (may require transaction)
5. Delegate votes on your behalf

**Choosing a Delegate**:
- Review their voting history
- Check their stated positions
- See their participation rate
- Consider alignment with your values

### After Voting

**Track Results**:
- Watch proposal progress
- See current vote tally
- Wait for voting period end
- Monitor execution

**Engage Further**:
- Share your reasoning publicly
- Encourage others to vote
- Discuss outcomes

### Voting Best Practices

**Do**:
- Vote on proposals you understand
- Research before voting
- Consider long-term implications
- Delegate if too busy

**Don't**:
- Vote blindly
- Follow others without thinking
- Ignore small proposals
- Forget to vote

### Lumina Governance

**How to Vote on Lumina**:
1. Hold AXM tokens
2. Navigate to Governance page
3. View active proposals
4. Connect wallet
5. Cast your vote
6. Sign with wallet

🔥 **Action Step**: Find an active proposal in Lumina governance and cast your vote.`
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
        ],
        content: `## Writing Winning Proposals

Great ideas need great proposals. Learn to write proposals that pass.

### Before You Write

**Validate Your Idea**:
- Is this a real problem?
- Does the DAO care about this?
- Has it been proposed before?
- What happened to similar proposals?

**Gather Information**:
- Understand current state
- Research alternatives
- Know the objections
- Calculate costs/benefits

### Proposal Writing Best Practices

**Title**:
- Clear and descriptive
- Action-oriented
- Not clickbait

**Summary** (Most Important):
- 2-3 sentences maximum
- State the problem
- State the solution
- State the ask

**Motivation**:
- Why does this matter?
- Who benefits?
- What's the cost of inaction?
- Data and evidence

**Specification**:
- Detailed description
- Technical requirements
- Timeline
- Success metrics

**Budget** (if applicable):
- Clear cost breakdown
- Justification for amounts
- Payment schedule
- Milestones

### Building Support Before Submission

**Soft Launch**:
1. Share idea in forums/Discord
2. Gather initial feedback
3. Find allies who support
4. Address concerns early

**Why This Matters**:
- Avoid surprise opposition
- Improve proposal quality
- Build coalition
- Higher pass rate

### The Proposal Lifecycle

1. **Idea Phase**: Informal discussion
2. **Draft Phase**: Written proposal shared
3. **Discussion Phase**: Community feedback
4. **Revision Phase**: Incorporate feedback
5. **Formal Submission**: On-chain or Snapshot
6. **Voting Period**: Community votes
7. **Execution**: If passed, implement

### Responding to Feedback

**Constructive Approach**:
- Thank all commenters
- Address concerns directly
- Be willing to revise
- Stay professional

**Common Feedback Types**:
- **Technical concerns**: Get expert input
- **Scope questions**: Clarify boundaries
- **Cost concerns**: Justify or reduce
- **Opposition**: Understand and address

### When Proposals Fail

**It's Not the End**:
- Learn from feedback
- Revise and resubmit
- Build more support
- Try different approach

**Analysis**:
- Why did it fail?
- Who opposed and why?
- What would change votes?
- Is the idea fundamentally flawed?

### Templates and Resources

**Use Existing Templates**:
- Check DAO documentation
- Look at passed proposals
- Follow established format
- Don't reinvent unnecessarily

🔥 **Action Step**: Draft a proposal for something you'd like to see in Lumina. Share in community for feedback.`
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
        ],
        content: `## Navigating DAO Politics

DAOs are human organizations. Understanding social dynamics helps you be effective.

### Building Reputation

**How Reputation Works**:
- No formal titles (usually)
- Influence earned through contribution
- Track record matters
- Consistency over time

**Ways to Build Reputation**:
- Participate regularly in discussions
- Vote consistently
- Contribute work (not just votes)
- Help other members
- Follow through on commitments

**Time Investment**:
- Reputation takes months to build
- Lost quickly through bad actions
- Worth the long-term investment

### Finding Allies

**Why Alliances Matter**:
- More voting power together
- Diverse perspectives
- Support for proposals
- Shared workload

**Finding Like-Minded Members**:
- Review voting histories
- Engage in discussions
- Join working groups
- Attend community calls

**Building Coalitions**:
- Find shared interests
- Communicate openly
- Compromise when needed
- Maintain relationships even in disagreement

### Constructive Disagreement

**Healthy Conflict**:
- Disagreement is normal
- Leads to better outcomes
- Tests ideas thoroughly
- Prevents groupthink

**How to Disagree Well**:
- Focus on ideas, not people
- Provide reasoning
- Acknowledge valid points
- Seek common ground
- Know when to concede

**Avoiding Toxicity**:
- No personal attacks
- Stay professional
- Take breaks when heated
- Assume good faith

### DAO Communication Channels

**Discord**:
- Day-to-day discussion
- Quick questions
- Community building
- Working group coordination

**Forums** (Discourse, Commonwealth):
- Long-form proposals
- Structured debate
- Searchable history
- Serious governance

**Governance Calls**:
- Live discussion
- Proposal presentations
- Community updates
- Voice and video

### Common DAO Challenges

**Voter Apathy**:
- Low participation
- Whales dominate
- Solution: Delegation, incentives

**Whale Dominance**:
- Few wallets control votes
- Minority voice drowned out
- Solution: Quadratic voting, conviction voting

**Coordination Failure**:
- Can't agree on anything
- Proposals stall
- Solution: Clear processes, smaller working groups

### Your Role in the Community

**Active Participant**:
- Vote regularly
- Engage in discussions
- Support good proposals
- Call out bad ones

**Contributor**:
- Take on work
- Lead initiatives
- Help others
- Build the DAO

### Congratulations!

You've completed "DAO Participation"!

You now understand:
- What DAOs are and how they work
- Governance token mechanics
- How to evaluate proposals
- Voting processes
- Creating your own proposals
- Community dynamics

🔥 **Final Action Step**: Join Lumina's governance community. Participate in at least one proposal discussion this week.`
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
        ],
        content: `## How Lumina Rewards Work

Lumina rewards creators and participants with AXM tokens. Here's how the system works.

### The Reward Pool

**How Tokens Are Distributed**:
- Daily reward pool allocated from protocol
- Distributed based on activity and quality
- Everyone competes for share of pool
- More activity = more competition

**Pool Mechanics**:
- Fixed daily emissions
- Split among all earners
- Your share depends on contribution
- Early activity matters

### Distribution Categories

**Content Rewards**: 40% of pool
- Creating posts, videos, content
- Quality and engagement based

**Engagement Rewards**: 25% of pool
- Likes, comments, shares
- Community participation

**Staking Rewards**: 20% of pool
- Locking AXM tokens
- Long-term commitment bonus

**Special Rewards**: 15% of pool
- Quests and achievements
- Events and promotions

### Earning Multipliers

**Level Multiplier**:
Higher level = higher multiplier on all earnings

| Level | Multiplier |
|-------|------------|
| 1-5 | 1.0x |
| 6-10 | 1.1x |
| 11-20 | 1.2x |
| 21-50 | 1.5x |
| 51+ | 2.0x |

**Streak Multiplier**:
Consecutive daily activity

| Streak | Bonus |
|--------|-------|
| 7 days | +10% |
| 30 days | +25% |
| 90 days | +50% |

**Quality Multiplier**:
Content that gets more engagement earns more

### When Rewards Accumulate

**Real-Time Accrual**:
- Rewards accumulate continuously
- Viewable in your dashboard
- Claimable when you want

**Snapshot Times**:
- Daily snapshots for calculations
- Activity before snapshot counts
- Plan activity accordingly

🔥 **Action Step**: Check your current multipliers. Identify one you can improve this week.`
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
        ],
        content: `## Earning Through Content Creation

Creating content is the core way to earn on Lumina. Maximize your content rewards.

### How Content Rewards Work

**Basic Formula**:
Base Reward × Quality Score × Engagement Multiplier × Level Bonus

**What Gets Rewarded**:
- Original content creation
- Engagement your content receives
- Consistency of posting
- Content quality signals

### Quality Scoring Factors

**What Affects Quality Score**:
- Originality (not copied)
- Completion (not truncated)
- Media quality (resolution, clarity)
- Proper formatting
- Appropriate length

**Quality Tiers**:
| Tier | Quality Score | Characteristics |
|------|---------------|-----------------|
| Bronze | 1.0x | Basic content |
| Silver | 1.5x | Good quality |
| Gold | 2.0x | High quality |
| Diamond | 3.0x | Exceptional |

### Engagement Bonuses

**Engagement Metrics That Count**:
- Likes received
- Comments received
- Shares/reposts
- Watch time (for video)
- Click-through rate

**Engagement Tiers**:
| Engagement Level | Bonus |
|-----------------|-------|
| Low | +0% |
| Medium | +25% |
| High | +50% |
| Viral | +100% |

### Consistency Rewards

**Posting Streaks**:
Regular posting builds earning power

**Benefits of Consistency**:
- Streak multipliers apply
- Algorithm favors active creators
- Audience expects content
- Compounding engagement

**Optimal Posting Frequency**:
- Minimum: 3x per week
- Good: Daily
- Optimal: 1-2 quality posts/day
- Warning: Quality over quantity

### Content Type Rewards

**Text Posts**: Base rewards
**Image Posts**: 1.2x base
**Video Posts**: 1.5x base
**Live Streams**: 2.0x base (while live)

### Maximizing Content Rewards

**Strategy**:
1. Focus on quality over quantity
2. Post at optimal times
3. Engage with comments
4. Maintain consistency
5. Diversify content types

🔥 **Action Step**: Create one high-quality piece of content. Track its engagement and rewards.`
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
        ],
        content: `## Earning Through Engagement

Even without creating content, you can earn by participating. Here's how.

### The Engagement Point System

**Actions That Earn Points**:
| Action | Points |
|--------|--------|
| Like | 1 point |
| Comment | 5 points |
| Share | 3 points |
| Reply to comment | 3 points |
| Save post | 2 points |

**Points to AXM Conversion**:
Points accumulated → converted daily → AXM rewards

### Daily Earning Limits

**Why Limits Exist**:
- Prevent spam
- Ensure fair distribution
- Maintain platform quality

**Daily Caps**:
| Action | Daily Cap |
|--------|-----------|
| Likes | 100 |
| Comments | 50 |
| Shares | 30 |
| Total Points | 500 |

**After Cap**:
- Still counts for streaks
- Doesn't earn additional points
- Resets at midnight UTC

### Quality vs Quantity

**Quality Engagement**:
- Thoughtful comments earn more
- Comments that get liked earn bonuses
- First to comment on viral content
- Helpful responses valued

**Spam Detection**:
- Duplicate comments penalized
- Too-short comments reduced
- Suspicious patterns flagged
- Quality filters active

### Strategic Engagement

**High-Value Actions**:
1. Comment on rising content early
2. Provide helpful responses
3. Engage in discussions
4. Support quality creators

**Timing Matters**:
- Early engagement rewards higher
- Peak hours have more competition
- Consistent timing builds habits

### Building Engagement Habits

**Daily Routine**:
1. Morning: Quick scroll and likes
2. Midday: Thoughtful comments
3. Evening: Discussion participation
4. Night: Save quality content

**Weekly Goals**:
- Hit daily caps most days
- Maintain 7-day streak
- Build relationships through comments

🔥 **Action Step**: Track your engagement today. Note points earned and caps hit.`
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
        ],
        content: `## The Power of Streaks

Daily consistency compounds your earnings. Never underestimate streaks.

### Daily Check-ins

**How Check-ins Work**:
- Visit Lumina each day
- Perform qualifying action
- Check-in registered
- Bonus received

**Qualifying Actions**:
- Like a post
- Create content
- Comment on something
- Complete a quest
- Any meaningful activity

**Check-in Bonuses**:
- Base check-in reward
- Increases with streak
- Special milestone rewards

### Streak Multipliers

**How Streaks Compound**:

| Streak Length | Total Multiplier |
|---------------|-----------------|
| 1-6 days | 1.0x |
| 7 days | 1.1x |
| 14 days | 1.15x |
| 30 days | 1.25x |
| 60 days | 1.4x |
| 90 days | 1.5x |
| 180 days | 1.75x |
| 365 days | 2.0x |

**The Math**:
A 30-day streak means 25% more on ALL earnings.
Over a month, that's significant AXM.

### Streak Milestones

**Special Rewards At**:
- 7 days: Bronze streak badge
- 30 days: Silver streak badge + bonus
- 90 days: Gold streak badge + major bonus
- 365 days: Diamond streak badge + huge bonus

### Recovery Strategies

**If You Miss a Day**:

**Streak Freeze** (if available):
- One free freeze per month
- Preserves streak
- Must activate before missing

**Grace Period**:
- Small window to recover
- Reduced streak penalty
- Check your settings

### Protecting Your Streak

**Best Practices**:
- Set daily reminders
- Morning routine check-in
- Multiple device access
- Travel plans considered

**Minimum Activity**:
Even a single like maintains your streak.
Takes 10 seconds. Worth doing daily.

### Streak Strategy

**Starting Out**:
Focus on building to 7 days first.

**Intermediate**:
Target 30-day milestone.

**Advanced**:
Protect long streaks at all costs.

🔥 **Action Step**: Start a streak today. Set a daily reminder. Don't break it.`
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
        ],
        content: `## Quests and Achievements

Bonus rewards for completing specific objectives. Hunt achievements strategically.

### Quest Types

**Daily Quests**:
- Reset every 24 hours
- Smaller rewards
- Easy to complete
- Build streaks

**Weekly Quests**:
- Reset every 7 days
- Medium rewards
- Require more effort
- Good ROI

**Special Event Quests**:
- Limited time
- Larger rewards
- Unique challenges
- Don't miss these

**Permanent Achievements**:
- One-time completion
- Large rewards
- Badge unlocks
- Status symbols

### Daily Quest Examples

- Create 1 post
- Like 10 posts
- Comment on 5 posts
- Maintain streak
- Share content

**Typical Daily Rewards**: 10-50 AXM

### Weekly Quest Examples

- Create 5 pieces of content
- Reach X engagement
- Engage with 50 creators
- Complete all daily quests
- Grow followers

**Typical Weekly Rewards**: 100-500 AXM

### Achievement Categories

**Content Achievements**:
- First post
- 100 posts
- Viral content
- Video milestones

**Engagement Achievements**:
- Comment milestones
- Likes received
- Shares achieved
- Reply milestones

**Community Achievements**:
- Follower milestones
- Group participation
- Helping others
- Referrals

**Streak Achievements**:
- 7-day streak
- 30-day streak
- 90-day streak
- Year streak

### Strategic Quest Completion

**Efficiency Tips**:
1. Check quests at day start
2. Stack multiple quests
3. Prioritize high-reward quests
4. Don't miss weekly resets

**Quest Stacking**:
One action can complete multiple quests:
- Post a video (content + video quest)
- Get likes (engagement + content quest)
- Maintain streak (streak + daily quest)

### Badge Benefits

**Beyond Bragging Rights**:
- Profile visibility
- Earning multipliers
- Special access
- Community recognition

🔥 **Action Step**: Review all available quests. Create a plan to complete at least 3 today.`
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
        ],
        content: `## Leveling Up Your Earnings

Your level directly impacts how much you earn. Understand the XP system.

### The Level System

**How Levels Work**:
- Earn XP through activities
- XP accumulates to level up
- Higher levels = more earning power
- Progress visible in profile

### XP Sources

| Activity | XP Earned |
|----------|-----------|
| Create content | 50-200 XP |
| Get likes | 5 XP each |
| Get comments | 10 XP each |
| Complete daily | 100 XP |
| Complete weekly | 500 XP |
| Maintain streak | 50 XP/day |

### Level Bonuses

**Earning Multipliers**:

| Level Range | Bonus |
|-------------|-------|
| 1-5 | Base (1.0x) |
| 6-10 | +10% (1.1x) |
| 11-20 | +20% (1.2x) |
| 21-30 | +30% (1.3x) |
| 31-50 | +50% (1.5x) |
| 51-75 | +75% (1.75x) |
| 76-100 | +100% (2.0x) |

**The Impact**:
Level 50 creator earns 50% more than level 1 for same activity.

### Level Milestones

**Unlocks**:
- Level 5: Basic features
- Level 10: Advanced posting
- Level 20: Group creation
- Level 30: Special features
- Level 50: Creator tools
- Level 100: Elite status

### XP Optimization

**High XP Activities**:
1. Create quality content daily
2. Maintain long streaks
3. Complete all quests
4. Get high engagement
5. Participate actively

**XP Multipliers**:
- Streak bonus applies to XP
- Quality content gives more XP
- Viral content = XP jackpot

### Leveling Strategy

**New Users (1-10)**:
- Focus on daily habits
- Complete all daily quests
- Build initial streak

**Growing (10-30)**:
- Increase content quality
- Grow engagement
- Complete weekly quests

**Advanced (30+)**:
- Optimize everything
- Focus on viral potential
- Maintain long streaks

### Long-term Progression

**Patience Required**:
- Leveling takes time
- Consistent activity compounds
- Don't rush, build habits
- Every action counts

🔥 **Action Step**: Check your current level. Calculate how much more you'd earn at the next tier.`
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
        ],
        content: `## Getting Your Rewards

Earned AXM needs to be claimed. Here's how to do it efficiently.

### The Claiming Process

**Step by Step**:
1. Navigate to Rewards page
2. View pending rewards
3. Click "Claim" button
4. Confirm in wallet
5. Pay gas fee
6. Receive AXM

**What You Need**:
- Pending rewards to claim
- Connected wallet
- Small ETH for gas (on Arbitrum)
- Patience for confirmation

### Understanding Pending Rewards

**Reward States**:
- **Accruing**: Still accumulating
- **Pending**: Ready to claim
- **Claimed**: In your wallet

**Viewing Breakdown**:
- Content rewards
- Engagement rewards
- Quest rewards
- Streak bonuses

### Gas Cost Considerations

**On Arbitrum**:
- Gas fees are low
- Typically $0.01-0.10
- Much cheaper than Ethereum

**Gas Optimization**:
- Wait for lower gas periods
- Batch claims (wait for larger amount)
- Don't claim tiny amounts

### Optimal Claim Timing

**When to Claim**:

**Small Rewards ($1-10)**:
Wait until $10+ accumulated
Gas makes small claims inefficient

**Medium Rewards ($10-100)**:
Claim weekly or bi-weekly
Good balance of frequency and efficiency

**Large Rewards ($100+)**:
Claim when convenient
Gas is negligible at this scale

### Claim Frequency Strategy

**Daily Claimers**:
- Lose to gas fees
- Not recommended
- Exception: Very high earners

**Weekly Claimers**:
- Good balance
- Reasonable gas ratio
- Regular cash flow

**Monthly Claimers**:
- Maximum efficiency
- Large batches
- Risk of price volatility

### After Claiming

**Options for Your AXM**:
1. Hold for appreciation
2. Stake for more rewards
3. Provide liquidity
4. Tip other creators
5. Trade for other tokens

### Tracking Your Earnings

**Keep Records Of**:
- Amount earned
- Source breakdown
- Claim dates
- Gas paid
- What you did with tokens

**Why Track**:
- Optimize strategy
- Tax reporting
- Progress monitoring

🔥 **Action Step**: Check your pending rewards. Decide optimal claim timing based on amount.`
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
        ],
        content: `## Sustainable Earning

Burning out helps no one. Build a strategy that lasts.

### Time vs Reward Optimization

**The 80/20 Rule**:
- 20% of activities = 80% of rewards
- Identify high-value activities
- Reduce low-value time sinks

**High-Value Activities**:
- Quality content creation
- Strategic engagement
- Streak maintenance
- Quest completion

**Low-Value Activities**:
- Endless scrolling
- Low-effort spam
- Chasing every small reward

### Finding Your Rhythm

**Daily Time Budget**:

| Time Available | Recommended Focus |
|----------------|-------------------|
| 15 min | Check-in + 1 quality action |
| 30 min | + Some engagement |
| 1 hour | + Content creation |
| 2+ hours | Full earning potential |

### Activity Balance

**The Ideal Mix**:
- 40% Content creation
- 30% Quality engagement
- 20% Community building
- 10% Platform exploration

**Avoid**:
- All engagement, no creation
- All creation, no engagement
- Ignoring streaks
- Skipping quests

### Signs of Burnout

**Watch For**:
- Dreading platform use
- Rushing through activities
- Quality declining
- Missing days frequently
- Not enjoying the process

**Prevention**:
- Set boundaries
- Take planned breaks
- Vary your activities
- Remember: this should be fun

### Long-term Sustainability

**Building Habits**:
- Start small, grow gradually
- Consistent beats intense
- Link to existing routines
- Celebrate milestones

**The Compound Effect**:
- Daily small actions
- Build over weeks/months
- Levels increase
- Streaks compound
- Earnings grow exponentially

### Your Personal Strategy

**Define Your Goals**:
- How much time do you have?
- What's your earning target?
- What do you enjoy doing?
- What's sustainable for you?

**Create Your Plan**:
1. Daily check-in time
2. Content creation schedule
3. Engagement routine
4. Quest tracking system

### Congratulations!

You've completed "Earning AXM"!

You now understand:
- The reward system mechanics
- Content creation rewards
- Engagement earning
- Streak power
- Quest optimization
- Level progression
- Claim strategies
- Sustainable approaches

🔥 **Final Action Step**: Create your personal earning strategy. Set realistic daily and weekly goals.`
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
        ],
        content: `## Why People Tip

Understanding tipping psychology helps you inspire more support.

### Tipping Motivations

**Why People Tip Creators**:

**1. Gratitude**
- You helped them
- They learned something
- You entertained them
- They feel thankful

**2. Connection**
- They feel connected to you
- They're part of something
- They want to support your journey
- Personal relationship feeling

**3. Status**
- Being recognized as supporter
- Top tipper leaderboards
- Exclusive access
- Badges and recognition

**4. Reciprocity**
- You gave value first
- They feel obligated
- Natural human response
- Want to give back

### Emotional Triggers

**What Moves People to Act**:

**Joy**: Content that makes them happy
**Learning**: Content that teaches something
**Inspiration**: Content that motivates
**Relief**: Content that solves a problem
**Belonging**: Content that includes them

**Emotional Journey**:
Content → Emotion → Connection → Action (Tip)

### The Value Exchange Mindset

**Traditional Mindset**:
"I create content, you tip me"
- Transactional
- Feels like begging
- Awkward

**Value Exchange Mindset**:
"I provide value, you show appreciation"
- Relationship-based
- Natural
- Comfortable for both

**The Shift**:
You're not asking for money.
You're giving them a way to say thank you.

### Tipping on Lumina

**How It Works**:
- Direct AXM transfers
- Visible to community
- Goes straight to creator
- No intermediary fees

**Why AXM Tipping is Special**:
- Permanent on blockchain
- Accumulates value
- Shows commitment
- Builds relationship

🔥 **Action Step**: Think about content you've tipped for. What motivated you? Apply those insights to your content.`
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
        ],
        content: `## Getting Ready to Receive Tips

Make it easy for supporters to tip you.

### Wallet Configuration

**Connecting Your Wallet**:
1. Navigate to Profile Settings
2. Connect MetaMask wallet
3. Confirm on Arbitrum network
4. Wallet linked to profile

**Why This Matters**:
- Tips go directly to your wallet
- You control your funds
- No platform custody
- Instant access

### Profile Tip Settings

**Enable Tipping**:
1. Go to Creator Settings
2. Toggle "Enable Tips"
3. Set minimum tip (optional)
4. Add tip message (optional)

**Custom Tip Amounts**:
- Set suggested amounts
- Example: 10, 50, 100 AXM
- Makes tipping easier
- Guides supporter decisions

### Visibility and Transparency

**What Tippers See**:
- Tip button on your content
- Your suggested amounts
- Your thank you message
- Transaction confirmation

**What You See**:
- Incoming tips in dashboard
- Tipper identity (if not anonymous)
- Tip amounts
- Total tips received

### Making Tipping Easy

**Reduce Friction**:
- Clear tip button placement
- Simple amounts
- Quick confirmation
- Thank you message immediate

**On Your Profile**:
- Tip button visible
- Recent tippers shown (optional)
- Total support displayed (optional)

### Best Practices

**Do**:
- Test the tip flow yourself
- Make it obvious how to tip
- Thank tippers promptly
- Track your top supporters

**Don't**:
- Hide tip functionality
- Make it complicated
- Ignore tippers
- Set minimums too high

### Notification Setup

**Get Notified When**:
- You receive a tip
- Big tips arrive
- New tippers emerge

**How to Configure**:
1. Settings → Notifications
2. Enable tip alerts
3. Choose notification method

🔥 **Action Step**: Complete your tipping setup. Send yourself a small test tip to verify it works.`
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
        ],
        content: `## Creating Tip-Worthy Content

Not all content earns tips equally. Here's what works.

### Value-First Content

**Types of Value**:

**Educational**: Teach something useful
- How-to guides
- Tutorials
- Industry insights
- Tips and tricks

**Entertainment**: Make them feel good
- Humor
- Stories
- Creative work
- Engaging content

**Transformation**: Help them change
- Before/after
- Journey documentation
- Problem solving
- Breakthrough moments

### Vulnerability and Authenticity

**Why Vulnerability Works**:
- Creates connection
- Shows humanity
- Builds trust
- Inspires reciprocity

**Authentic Sharing**:
- Your real journey
- Struggles and wins
- Behind the scenes
- Honest perspectives

**Balance**:
Be vulnerable but not victimized.
Share struggles with solutions.

### Call-to-Action Placement

**The Soft Ask**:
"If this helped, tips are always appreciated"
- After delivering value
- Not before
- Casual, not desperate

**CTA Placement**:
- End of valuable content
- After solving a problem
- When connection is high
- In profile/bio

**What NOT to Do**:
- Lead with asking
- Beg or guilt-trip
- Ask repeatedly
- Make it the focus

### Content Types That Earn

**High Tip Potential**:
1. Detailed tutorials
2. Exclusive insights
3. Personal stories
4. Problem solutions
5. Entertainment value

**Low Tip Potential**:
1. Generic content
2. Complaints
3. Low-effort posts
4. Purely promotional
5. Copied content

### The Tip-Earning Formula

1. **Hook**: Get attention
2. **Value**: Deliver substantially
3. **Connection**: Build relationship
4. **Soft CTA**: Make it easy

### Timing Matters

**Best Times for Tips**:
- After major value delivery
- During live streams
- Following transformations
- When emotions are high

🔥 **Action Step**: Create one piece of high-value content. Include a soft CTA. Track the response.`
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
        ],
        content: `## Nurturing Your Tippers

One-time tippers become regulars through relationship building.

### Thank You Best Practices

**Immediate Response**:
- Thank within 24 hours
- Personalized message
- Genuine appreciation
- Specific acknowledgment

**Great Thank You Examples**:
- "Your tip on my DeFi tutorial means so much. Thanks for supporting my content!"
- "I noticed you've tipped twice now. You're amazing!"
- Not: "Thanks for the tip" (too generic)

**Public vs Private**:
- Public: Recognition, inspires others
- Private: Personal, deeper connection
- Best: Both when appropriate

### Exclusive Recognition

**Ways to Recognize Supporters**:
- Tipper leaderboard
- Shoutouts in content
- Special badges
- Early access
- Direct replies

**Tipper Tiers**:
| Tier | Lifetime Tips | Recognition |
|------|--------------|-------------|
| Supporter | $10+ | Name mention |
| Fan | $50+ | Shoutout |
| Champion | $200+ | Special badge |
| Patron | $500+ | Direct access |

### Community Building

**Creating Supporter Community**:
- Exclusive group for tippers
- Special content for supporters
- Behind-the-scenes access
- Direct communication channel

**Making Them Feel Special**:
- Remember their contributions
- Reference past conversations
- Include them in decisions
- Celebrate their milestones

### Converting One-Time to Regular

**The Path**:
One-time → Recognized → Engaged → Regular

**How to Progress Them**:
1. Thank genuinely
2. Follow up occasionally
3. Deliver consistent value
4. Make them feel valued
5. Create tipping opportunities

### Retention Strategies

**Keep Supporters Engaged**:
- Consistent content
- Regular interaction
- Exclusive updates
- Personal touches

**When Tips Slow Down**:
- Don't panic
- Keep delivering value
- Stay connected
- Be patient

### Congratulations!

You've learned how to build lasting supporter relationships.

🔥 **Action Step**: Reach out to your top 3 tippers with personalized thank you messages this week.`
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
        ],
        content: `## Tipping as a Growth Strategy

Giving tips strategically grows your own following.

### Reciprocity Dynamics

**The Psychology**:
When you give, people feel inclined to give back.
Not immediately, but over time.

**How It Works**:
1. You tip a creator
2. They notice you
3. They check your content
4. They potentially follow/engage
5. They may tip back

**It's Not Manipulation**:
Only tip content you genuinely appreciate.
Authenticity matters.

### Networking Through Tips

**Tips as Introductions**:
- Gets you noticed by bigger creators
- Opens doors for collaboration
- Shows you're a community member
- Builds your reputation

**Strategic Approach**:
- Tip creators in your niche
- Tip rising stars
- Tip consistent quality
- Include thoughtful messages

### Budget Allocation

**How Much to Tip**:
- Start small, grow with success
- 5-10% of earnings reinvested
- Sustainable over time
- Don't overextend

**Monthly Budget Example**:
| Earning Level | Tip Budget |
|--------------|------------|
| $100/month | $5-10 |
| $500/month | $25-50 |
| $1000/month | $50-100 |

### Who to Tip

**Prioritize**:
1. Creators who inspire you
2. Rising creators in your niche
3. Collaborators and friends
4. Creators you want to connect with

**Diversify**:
- Don't tip just one person
- Spread across community
- Mix big and small creators

### The Right Way to Tip

**Best Practices**:
- Genuine appreciation only
- Include a personal message
- Don't expect anything back
- Be consistent, not one-time

**What NOT to Do**:
- Tip expecting immediate return
- Use tips to ask for favors
- Tip with strings attached
- Be transactional

### Building Community Through Generosity

**The Bigger Picture**:
- You become known as generous
- Others want to support you back
- Community forms around mutual support
- Rising tide lifts all boats

### Congratulations!

You've completed "Tipping Economy"!

You now understand:
- Tipping psychology
- Technical setup
- Content that earns
- Supporter relationships
- Strategic tipping

🔥 **Final Action Step**: Set a monthly tipping budget. Tip 5 creators this week who deserve support.`
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
        ],
        content: `## Understanding Paid Communities

Paid communities are the most sustainable creator business model.

### Why Paid Communities Work

**The Core Value**:
- Exclusive access to you
- Community of like-minded people
- Premium content and experiences
- Direct relationship

**Benefits for Creators**:
- Predictable recurring revenue
- Deeper audience relationships
- Less reliance on algorithms
- Sustainable long-term income

### Free vs Paid Content Balance

**The Funnel**:
Free Content → Builds Audience → Paid Community → Core Revenue

**What Should Be Free**:
- Discovery content
- Value demonstrations
- Community samples
- General insights

**What Should Be Paid**:
- Deep dives
- Personal access
- Exclusive content
- Community membership

**The 90/10 Rule**:
90% of your audience: Free content
10% (or less): Paid members
Those 10% can provide most income.

### Community Value Proposition

**What Members Really Pay For**:
1. **Access**: To you directly
2. **Community**: Like-minded people
3. **Content**: Exclusive material
4. **Transformation**: Results they want
5. **Status**: Being an insider

### Sustainable Creator Income

**Monthly Recurring Revenue (MRR)**:
- Predictable income
- Compounds over time
- Less hustle than one-off sales
- Freedom to create

**Math Example**:
- 100 members × $20/month = $2,000/month
- 500 members × $20/month = $10,000/month
- Scales with quality, not just volume

🔥 **Action Step**: Define what unique value you can offer that people would pay for monthly.`
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
        ],
        content: `## Creating Your Premium Offer

What will people actually pay for? Let's design something irresistible.

### Exclusive Content Ideas

**Content Types**:
- Behind-the-scenes
- In-depth tutorials
- Early access
- Extended versions
- Member-only series
- Templates and resources

**Content Cadence**:
Weekly minimum for retention.
Mix content types for variety.

### Access and Community Benefits

**Access Benefits**:
- Direct messaging with you
- Q&A sessions
- Office hours
- Feedback on their work
- Priority responses

**Community Benefits**:
- Exclusive Discord/group
- Networking with peers
- Accountability partners
- Collaboration opportunities
- Mastermind groups

### Unique Experiences

**Experience Ideas**:
- Live workshops
- Group calls
- Challenges
- Cohort programs
- Virtual events
- IRL meetups (advanced)

### Designing Your Stack

**The Value Stack**:
Layer multiple benefits together:

1. Base: Community access
2. +: Exclusive content
3. +: Monthly live call
4. +: Direct messaging
5. +: Special resources

**More Value = Higher Price Justified**

### Finding Your Angle

**Questions to Answer**:
- What do people always ask you?
- What would you have paid for when starting?
- What transformation can you enable?
- What do you know that others don't?

### Validation Before Launch

**Test Your Idea**:
- Survey your audience
- Gauge interest informally
- Pre-sell before building
- Start with waitlist

🔥 **Action Step**: List 10 things you could offer members. Pick the top 5 for your core package.`
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
        ],
        content: `## Structuring Your Membership Tiers

Multiple tiers serve different needs and budgets.

### Tier Design Principles

**Good/Better/Best Framework**:
- **Basic**: Access to community + some content
- **Standard**: Full content + live sessions
- **Premium**: Everything + direct access

**Keep It Simple**:
- Maximum 3-4 tiers
- Clear differences between each
- Easy to understand value

### Example Tier Structure

| Tier | Price | Includes |
|------|-------|----------|
| Supporter | $5/mo | Community access |
| Member | $20/mo | + All content + monthly call |
| VIP | $50/mo | + 1:1 time + early access |

### Pricing Psychology

**Anchoring**:
Show higher tier first.
Makes middle tier feel reasonable.

**Price Points**:
- $5-10: Low barrier, high volume
- $15-30: Sweet spot for most
- $50-100: Premium, lower volume
- $100+: High-touch required

**What to Charge**:
- Value delivered × 10% = minimum price
- What would you pay? = gut check
- What competitors charge = market rate

### Upgrade Paths

**Design for Upgrades**:
- Clear value at each level
- Incentives to upgrade
- Easy upgrade process
- Downgrade options too

**Promotion Strategies**:
- Trial higher tiers
- Limited-time upgrades
- Founding member pricing
- Annual discounts

### AXM/Crypto Considerations

**Web3 Pricing Benefits**:
- Global payments easy
- No payment processor fees
- Token-gated access
- NFT membership passes

🔥 **Action Step**: Design your 2-3 tiers. Price them based on the value you'll deliver.`
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
        ],
        content: `## Launching Successfully

A great launch creates momentum. Here's how to do it right.

### Pre-Launch Buildup

**Timeline** (4-6 weeks before):

**Week 1-2**:
- Announce it's coming
- Start waitlist
- Tease benefits

**Week 3-4**:
- Share more details
- Build anticipation
- Answer questions

**Week 5-6**:
- Final countdown
- Early access for waitlist
- Launch prep

### Founding Member Incentives

**Why Founding Members**:
- Early revenue
- Initial community
- Testimonials
- Feedback for improvement

**Incentive Ideas**:
- Discounted price (locked forever)
- Extra benefits
- Founding member badge
- Lifetime access
- Input on direction

**Example**:
"First 50 members get 40% off forever + Founding Member status"

### Launch Day Execution

**Launch Checklist**:
- [ ] Email list notified
- [ ] Social posts scheduled
- [ ] Community ready
- [ ] Payment working
- [ ] Onboarding prepared
- [ ] Support ready

**Launch Activities**:
- Go live with announcement
- Multiple posts throughout day
- Stories/updates
- Engage with every comment
- Thank first members publicly

### Post-Launch

**First Week**:
- Welcome each member personally
- Deliver immediate value
- Ask for feedback
- Fix any issues fast

**First Month**:
- Establish rhythms
- Build community culture
- Gather testimonials
- Plan ongoing content

🔥 **Action Step**: Create your launch timeline. Set a specific launch date.`
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
        ],
        content: `## Keeping Members Happy

Launching is easy. Retention is the real game.

### Content Calendars for Members

**Weekly Rhythm**:
| Day | Content |
|-----|---------|
| Monday | New exclusive post |
| Wednesday | Live Q&A |
| Friday | Member spotlight |

**Monthly Rhythm**:
- Week 1: New training/workshop
- Week 2: Guest expert
- Week 3: Community challenge
- Week 4: Recap + preview

### Creating Systems

**Batching**:
- Create content in batches
- Schedule in advance
- Reduce daily pressure

**Templates**:
- Content templates
- Email templates
- Response templates
- Saves time, maintains quality

### Surprise and Delight Moments

**Unexpected Bonuses**:
- Bonus content drops
- Early access to new things
- Member appreciation days
- Random gifts/shoutouts

**Why This Matters**:
Surprises create emotional bonds.
Expectations + exceeded = loyalty.

### Feedback Loops

**Regular Check-ins**:
- Monthly surveys
- Direct messages
- Community polls
- Casual conversations

**What to Ask**:
- What's working?
- What's missing?
- What would make you upgrade?
- How likely to recommend? (NPS)

**Acting on Feedback**:
- Thank for feedback
- Implement suggestions
- Communicate changes
- Close the loop

### Metrics to Track

**Key Numbers**:
- Monthly churn rate
- Member engagement
- Content consumption
- Community activity

🔥 **Action Step**: Create your first month's content calendar. Include at least one surprise.`
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
        ],
        content: `## Setting Clear Expectations

Unmet expectations cause churn. Manage them proactively.

### Onboarding Processes

**First Impression Matters**:
Welcome → Orientation → Integration → Engagement

**Onboarding Sequence**:
1. Welcome message (immediate)
2. How to get started guide
3. Introduce yourself prompt
4. First quick win
5. Community introduction

**New Member Checklist**:
- [ ] Complete profile
- [ ] Introduce yourself
- [ ] Access content library
- [ ] Join first live session
- [ ] Connect with 3 members

### Communication Standards

**Be Clear About**:
- Response time expectations
- How to reach you
- What's included vs not
- Community guidelines
- Content schedule

**Create a Member Guide**:
Document everything members need to know.
Reduce confusion and support load.

### Handling Disappointment

**When Members Are Unhappy**:
1. Listen fully first
2. Acknowledge their feelings
3. Understand the issue
4. Offer solution
5. Follow up

**Common Complaints**:
- "Not enough content" → Show them what exists
- "Can't find things" → Improve organization
- "Not what I expected" → Clarify or refund
- "Too expensive" → Demonstrate value

### Refund Policies

**Options**:
- No refunds (clear upfront)
- 7-30 day guarantee
- Pro-rated refunds
- Case-by-case

**Recommendation**:
Be generous. Unhappy members hurt more than refunds cost.

🔥 **Action Step**: Write your member onboarding sequence. Send it within 5 minutes of joining.`
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
        ],
        content: `## Moderating Growing Communities

Healthy communities need active moderation.

### Rules and Guidelines

**Essential Rules**:
- Be respectful
- No spam or promotion
- Stay on topic
- No harassment
- Confidentiality expectations

**Creating Guidelines**:
- Clear and specific
- Explain the why
- Examples of violations
- Consequences stated

**Displaying Rules**:
- Pinned posts
- Onboarding materials
- Community description
- Regular reminders

### Moderator Recruitment

**When to Add Mods**:
- 100+ active members
- Too much for you alone
- Different time zones needed
- Specialized areas

**Who Makes Good Mods**:
- Active members
- Positive contributors
- Good judgment
- Available time
- Aligned values

**Moderator Responsibilities**:
- Welcome new members
- Answer questions
- Enforce rules
- Escalate issues
- Foster discussions

### Conflict Resolution

**When Conflicts Arise**:
1. Assess the situation
2. Private message involved parties
3. Listen to both sides
4. Apply rules fairly
5. Document outcome

**Escalation Ladder**:
1. Warning
2. Temporary mute
3. Probation
4. Removal

**Handling Toxic Members**:
One bad actor can poison a community.
Remove faster than you think necessary.

### Creating Community Culture

**Lead by Example**:
- Be active
- Set the tone
- Recognize good behavior
- Address bad behavior quickly

🔥 **Action Step**: Write your community guidelines. Share them with your community.`
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
        ],
        content: `## Keeping Members Longer

Every month a member stays = more revenue. Focus on retention.

### Understanding Churn

**Churn Rate**:
Members lost / Total members × 100

**Healthy Benchmarks**:
- 5-7% monthly = good
- 3-5% monthly = great
- 10%+ monthly = problem

**Why Members Leave**:
- Not using it
- Not getting value
- Financial reasons
- Life changes
- Found alternative

### Churn Warning Signs

**Early Indicators**:
- Decreased activity
- Stopped attending live sessions
- No engagement for weeks
- Payment failures

**Monitor**:
- Last login date
- Content consumption
- Community participation
- Support tickets

### Re-engagement Campaigns

**For Inactive Members**:
1. Week 2 inactive: "We miss you" message
2. Week 3 inactive: Personal check-in
3. Week 4 inactive: Special offer
4. Week 5 inactive: Last chance

**Re-engagement Content**:
- Highlight what they're missing
- Share member wins
- Offer help
- Ask what's wrong

### Exit Interviews

**When They Cancel**:
- Ask why (survey or DM)
- Look for patterns
- Learn and improve
- Leave door open

**Exit Survey Questions**:
- Why are you leaving?
- What would have kept you?
- Would you return in future?
- What could we do better?

### Retention Tactics

**Keep Them Engaged**:
- Regular value delivery
- Personal touchpoints
- Community connections
- Gamification/progress
- Exclusive long-term benefits

**Loyalty Rewards**:
- 6-month badge
- 1-year celebration
- Anniversary gifts
- Veteran benefits

🔥 **Action Step**: Identify your at-risk members. Reach out to 3 today with personal messages.`
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
        ],
        content: `## Growing Sustainably

Scale without losing what makes your community special.

### Automation Opportunities

**What to Automate**:
- Welcome messages
- Onboarding sequences
- Content scheduling
- Payment reminders
- Basic FAQs

**What NOT to Automate**:
- Personal interactions
- Conflict resolution
- Major announcements
- Relationship building

### Team Building

**First Hires**:
1. Community moderator
2. Content assistant
3. Admin support

**Finding Help**:
- Active community members
- Part-time contractors
- Virtual assistants

**Delegating Effectively**:
- Clear responsibilities
- Training and resources
- Regular check-ins
- Feedback loops

### Maintaining Intimacy at Scale

**The Challenge**:
Personal touch + Large scale = Hard

**Solutions**:

**Tiered Access**:
- General: Community
- Mid: Group calls
- Premium: 1:1 time

**Office Hours**:
- Scheduled times for access
- Efficient for you
- Still personal

**Featured Members**:
- Spotlight members
- Creates personal moments
- Scalable recognition

**Small Groups**:
- Break into cohorts
- Peer connections
- Less reliance on you

### Growth Milestones

| Members | Focus |
|---------|-------|
| 0-50 | Personal touch, learn needs |
| 50-200 | Systems and rhythm |
| 200-500 | Add team, automate |
| 500+ | Scale structures |

🔥 **Action Step**: Identify one thing you do that could be automated or delegated.`
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
        ],
        content: `## Beyond Monthly Subscriptions

Layer additional revenue on top of your community.

### One-Time Purchases

**Digital Products**:
- Courses and workshops
- Templates and resources
- Tools and software
- Ebooks and guides

**Pricing Strategy**:
- Member discount (10-30% off)
- Exclusive early access
- Bundle with membership

### Live Events and Workshops

**Virtual Events**:
- Intensive workshops
- Multi-day summits
- Guest expert sessions
- Masterclasses

**Pricing**:
- Include some in membership
- Premium events extra
- Non-members pay more

**In-Person Events**:
- Meetups (free or low cost)
- Retreats (premium)
- Conferences (major production)

### Merchandise and Products

**Branded Merch**:
- T-shirts, hoodies
- Mugs, stickers
- Member-exclusive items

**Physical Products**:
- Related to your niche
- Curated recommendations
- White-label products

### NFT Integration

**Web3 Opportunities**:
- NFT membership passes
- Exclusive NFT drops
- Token-gated content
- Community tokens

### Additional Revenue Ideas

- Sponsored content (careful with this)
- Affiliate recommendations
- Consulting/coaching
- Job board/marketplace
- Certification programs

### Congratulations!

You've completed "Building Paid Communities"!

You now understand:
- Premium community models
- Offer design
- Tier pricing
- Launch strategies
- Retention tactics
- Scaling approaches
- Advanced monetization

🔥 **Final Action Step**: Plan your paid community. Set a launch date within 60 days.`
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
        ],
        content: `## Understanding the Referral Program

Earn AXM by bringing new users to Lumina.

### Reward Structure

**How You Earn**:
- Referral link provided in profile
- Share with potential users
- They sign up through your link
- You earn rewards when they're active

**Reward Types**:
- Sign-up bonus: When they join
- Activity bonus: When they engage
- Milestone bonus: When they achieve levels

### Tracking and Attribution

**Your Referral Link**:
lumina.com/ref/[your-username]

**Tracking Duration**:
- Cookie lasts 30 days
- First-click attribution
- Link tracked on blockchain

**Viewing Your Referrals**:
- Dashboard shows all referrals
- Status (signed up, active, inactive)
- Rewards earned and pending

### Tier Bonuses

**Referral Volume Tiers**:
| Referrals | Bonus |
|-----------|-------|
| 1-10 | Base rate |
| 11-50 | +10% |
| 51-100 | +25% |
| 100+ | +50% |

**Quality Multipliers**:
Active referrals earn more than inactive.
Referrals who create content multiply rewards.

🔥 **Action Step**: Find your referral link. Share it with one person today.`
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
        ],
        content: `## Finding the Right People

Quality referrals beat quantity. Target people who'll succeed.

### Ideal Referral Profiles

**Best Candidates**:
- Content creators looking for new platforms
- People interested in Web3/crypto
- Active social media users
- Friends in creative niches
- People frustrated with other platforms

**Less Ideal**:
- People with no interest in crypto
- Inactive social media users
- Those who don't create content

### Where to Find Them

**Online Communities**:
- Twitter/X crypto spaces
- Discord servers
- Reddit communities
- Telegram groups
- Other creator platforms

**Personal Network**:
- Friends who create content
- Family with relevant interests
- Colleagues in creative fields
- Alumni networks

**Professional Networks**:
- Industry events
- Conferences
- Online workshops
- Creator meetups

### Qualification Strategies

**Before Referring, Ask**:
- Are they interested in earning crypto?
- Do they create content regularly?
- Would they use a Web3 platform?
- Are they tech-comfortable?

**Soft Qualification**:
Share content about Lumina first.
Those who engage are good candidates.

🔥 **Action Step**: List 10 people in your network who fit the ideal profile.`
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
        ],
        content: `## Creating Genuine Messages

Nobody likes spam. Refer authentically.

### Value-First Messaging

**Lead With Value**:
- Share what YOU get from the platform
- Explain benefits for THEM
- Offer to help them get started

**Good Example**:
"I've been using Lumina for a month and earned 500 AXM. If you're interested in Web3 and creating content, you might like it too."

**Bad Example**:
"Sign up with my link!!! Free crypto!!!"

### Storytelling Approaches

**Share Your Journey**:
- Why you joined
- What you've learned
- Results you've achieved
- Challenges overcome

**Make It Personal**:
- Specific experiences
- Real numbers (when appropriate)
- Honest assessment
- Genuine enthusiasm

### Avoiding Common Pitfalls

**Don't**:
- Mass message strangers
- Promise unrealistic earnings
- Pressure people
- Spam in unrelated communities
- Use fake urgency

**Do**:
- Personalize each message
- Answer questions honestly
- Give them time to decide
- Follow up once, max twice
- Accept "no" gracefully

### Message Templates

**DM Template**:
"Hey [Name], I know you create [content type]. I've been using Lumina, a Web3 platform, and thought you might be interested. Happy to share more if you're curious."

**Post Template**:
"My experience on Lumina so far: [genuine update]. If anyone wants to check it out, I have a referral link in my bio."

🔥 **Action Step**: Write your personal referral story in 3-4 sentences.`
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
        ],
        content: `## Content That Drives Referrals

Let content do the selling. Here's what works.

### Tutorial Content

**Helpful Tutorials**:
- "How I set up my Lumina profile"
- "Earning my first AXM: Step by step"
- "NFT creation on Lumina walkthrough"
- "Using the Lumina mobile app"

**Why This Works**:
- Provides genuine value
- Shows platform features
- Natural referral placement
- Evergreen content

### Success Story Sharing

**Document Your Wins**:
- Weekly earning updates
- Engagement milestones
- Community connections made
- Skills developed

**Format Ideas**:
- Thread breakdowns
- Before/after comparisons
- Monthly income reports
- Case studies

### Platform Showcase Videos

**Video Content Ideas**:
- Platform tour
- Feature highlights
- Day-in-the-life content
- Comparison videos
- Tips and tricks

**Include**:
- Genuine reactions
- Real results
- Honest pros and cons
- Clear call-to-action

### Content Distribution

**Where to Share**:
- Your Lumina profile (obviously)
- Other social platforms
- YouTube
- Blog/website
- Newsletters

### Call-to-Action Placement

**Natural CTA**:
End of content: "If you want to try Lumina, my referral link is [link]"
In bio: Referral link permanently placed
Pinned content: Getting started guide with link

🔥 **Action Step**: Create one piece of referral content. Could be a post, video, or tutorial.`
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
        ],
        content: `## Creating Compound Growth

The best referral systems multiply themselves.

### Network Effect Design

**The Viral Loop**:
1. You refer User A
2. User A becomes active
3. User A refers User B
4. User B becomes active
5. User B refers User C
6. ...and so on

**Making It Happen**:
- Help referrals succeed
- Teach them to refer
- Create referral culture
- Celebrate their wins

### Incentive Alignment

**Align Everyone's Interests**:
- You win: Referral bonus
- They win: Great platform
- Platform wins: Growth
- Network wins: Better community

**Tiered Incentives**:
Consider helping referrals:
- Onboarding support
- Content feedback
- Strategy sharing
- Community introduction

### Gamification Elements

**Make It Fun**:
- Referral leaderboards
- Challenges and competitions
- Badges for milestones
- Public recognition

**Monthly Challenges**:
- "Who can refer 10 creators?"
- "Best referral story"
- "Most active referral network"

### Building a Referral Team

**Create Your Network**:
- Top referrers connect
- Share strategies
- Mutual support
- Collective growth

**Community Approach**:
Not just individual referrals
Build a referral community

### Long-term Thinking

**Sustainable Growth**:
- Quality over quantity
- Relationships over transactions
- Teaching over recruiting
- Value over extraction

🔥 **Action Step**: Help one of your referrals make their first referral.`
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
        ],
        content: `## Data-Driven Referrals

What gets measured gets improved.

### Key Metrics to Track

**Primary Metrics**:
- Total referrals
- Active referrals (% of total)
- Referral earnings
- Conversion rate

**Secondary Metrics**:
- Best referring channels
- Top performing content
- Time to activation
- Referral quality score

### Setting Up Tracking

**Spreadsheet Basics**:
| Date | Source | Signed Up | Activated | Earnings |
|------|--------|-----------|-----------|----------|
| ... | ... | ... | ... | ... |

**Track**:
- Where you shared
- What messaging used
- Who converted
- What they did next

### A/B Testing Approaches

**Test One Variable**:
- Different messaging
- Different platforms
- Different content types
- Different CTAs

**Example Test**:
Week 1: Share journey story
Week 2: Share tutorial content
Compare: Which got more signups?

### Continuous Improvement

**Monthly Review**:
- What worked this month?
- What didn't work?
- What will I try next?
- What will I stop doing?

**Optimization Cycle**:
Try → Measure → Learn → Adjust → Repeat

### When Something Works

**Double Down**:
Found a winning strategy?
- Do more of it
- Refine it further
- Teach others
- Document for yourself

### Congratulations!

You've completed "Referral Mastery"!

You now understand:
- Referral mechanics
- Finding audiences
- Authentic messaging
- Content strategies
- Viral loops
- Tracking and optimization

🔥 **Final Action Step**: Set a referral goal for this month. Track your progress daily.`
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
        ],
        content: `## Starting With Purpose

Great groups begin with a clear "why."

### Purpose Statement Crafting

**What's Your Group About?**
Not just the topic—the deeper purpose.

**Good Purpose Statements**:
- "Helping Web3 creators succeed together"
- "A supportive space for new NFT artists"
- "Daily accountability for content creators"

**Weak Purpose Statements**:
- "Crypto stuff"
- "For creators"
- "Community"

**Framework for Purpose**:
"We help [who] achieve [what] by [how]"

### Niche vs Broad Focus

**Niche Groups**:
- Specific audience
- Deep expertise
- Strong identity
- Easier to find your people
- Example: "Lumina Video Creators"

**Broad Groups**:
- Wide appeal
- More members potential
- Less focused discussion
- Harder to maintain culture
- Example: "Lumina Community"

**Recommendation**: Start niche, expand if needed.

### Differentiating Your Group

**Why Your Group?**
- What makes it unique?
- Why join yours vs others?
- What can't members get elsewhere?

**Differentiation Ideas**:
- Exclusive access
- Unique format
- Specific focus
- Community culture
- Expert leadership

🔥 **Action Step**: Write your group's purpose statement in one sentence.`
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
        ],
        content: `## First Impressions Matter

Set up your group to welcome members warmly.

### Group Settings Optimization

**Essential Settings**:
- Clear group name
- Compelling description
- Relevant category
- Appropriate visibility (public/private)
- Join requirements

**Profile Elements**:
- Banner image (branded)
- Group avatar
- Pinned welcome post
- Rules easily visible

### Welcome Message Creation

**What New Members See**:
Immediate welcome sets the tone.

**Good Welcome Message Elements**:
1. Warm greeting
2. Group purpose reminder
3. How to get started
4. First action to take
5. Where to get help

**Example**:
"Welcome to [Group]! We're so glad you're here. Start by introducing yourself in the Introductions thread. Check out our pinned Resources post for tips. If you have questions, just ask—we're a helpful bunch!"

### Initial Content Seeding

**Before Inviting Members**:
- 5-10 quality posts already there
- Conversation starters
- Resource posts
- Example of good content

**Why This Matters**:
Empty groups feel dead.
Seeded content shows what's expected.

**Seed Content Ideas**:
- Introduction (you start)
- Discussion question
- Resource compilation
- Group FAQ
- Success story

🔥 **Action Step**: Create your welcome message and 5 seed posts before inviting members.`
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
        ],
        content: `## Building Deliberate Culture

Culture happens whether you plan it or not. Plan it.

### Cultural Values Definition

**What Culture Do You Want?**
- Supportive? Competitive?
- Casual? Professional?
- Focused? Free-flowing?
- Beginner-friendly? Expert-level?

**Define 3-5 Core Values**:
Example values:
- Be helpful first
- Celebrate others' wins
- Share knowledge freely
- Constructive feedback only
- No gatekeeping

### Modeling Behavior

**You Set the Tone**:
- How you post = how they post
- How you respond = how they respond
- What you celebrate = what they value

**Leadership Behaviors**:
- Respond to every new member
- Acknowledge quality contributions
- Handle conflicts publicly (when appropriate)
- Admit mistakes openly

**Consistency Matters**:
Do it every day, not occasionally.

### Ritual and Tradition Creation

**Recurring Events**:
- Weekly discussion threads
- Monthly challenges
- Regular AMAs
- Milestone celebrations

**Examples**:
- "Win Wednesday" - share wins
- "Feedback Friday" - critique each other
- Monthly member spotlight
- Anniversary celebrations

**Why Rituals Work**:
- Creates anticipation
- Builds habit
- Strengthens bonds
- Defines identity

🔥 **Action Step**: Define your 3 core values. Create one weekly ritual.`
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
        ],
        content: `## Quality Growth

The right members matter more than many members.

### Promotion Strategies

**Where to Promote**:
- Your main content
- Other groups (carefully)
- Social platforms
- Direct invitations
- Partner collaborations

**How to Promote**:
- Show value, not just "join us"
- Share group wins and moments
- Member testimonials
- Exclusive teasers

**Organic Growth**:
Great content spreads naturally.
Focus on making the group valuable.

### Member Vetting

**Why Vet Members**:
- Protect culture
- Ensure quality
- Keep out bad actors

**Vetting Methods**:
- Application questions
- Approval process
- Referral requirements
- Trial periods

**Application Questions**:
- Why do you want to join?
- What will you contribute?
- How did you find us?

### Referral Encouragement

**Member-Driven Growth**:
Best members come from other members.

**Encourage Referrals**:
- Ask directly
- Make it easy (share link)
- Recognize referrers
- Create referral events

**Quality Control**:
"Invite people who you'd want to see succeed here."

### Growth Pace

**Sustainable Growth**:
- Too fast = culture loss
- Too slow = stagnation
- Right pace = strong foundation

**Guideline**:
Grow at a rate where you can welcome each new member personally.

🔥 **Action Step**: Identify 10 specific people you'd love to have in your group. Invite them personally.`
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
        ],
        content: `## Keeping Members Active

Engaged members stay. Here's how to keep them participating.

### Discussion Prompts

**Good Prompts**:
- Easy to answer
- Relevant to members
- Invite personal sharing
- Open-ended

**Prompt Examples**:
- "What's your biggest challenge this week?"
- "Share a win from the last 7 days"
- "What's one thing you learned recently?"
- "Hot take: [topic opinion]"

**Prompt Cadence**:
At least one per day keeps activity going.

### Regular Events

**Event Types**:
- Live Q&A sessions
- Workshops/trainings
- Challenges (7-day, 30-day)
- Competitions
- Collaborative projects

**Event Schedule**:
Weekly: At least one event
Monthly: Special event or challenge
Quarterly: Big community moment

### Member Spotlights

**Why Spotlights**:
- Recognizes contributors
- Creates aspirational examples
- Builds connections
- Encourages participation

**How to Spotlight**:
- Feature member's work
- Interview format
- Success story shares
- Behind-the-scenes

### Engagement Tactics

**Quick Wins**:
- Reply to every post
- Ask follow-up questions
- Tag relevant members
- Create reaction culture

**Gamification**:
- Points for participation
- Levels and badges
- Leaderboards
- Rewards for activity

🔥 **Action Step**: Plan next week's discussion prompts. Schedule one event.`
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
        ],
        content: `## Fair and Consistent Moderation

Good moderation protects the community.

### Rules and Enforcement

**Clear Rules**:
- Written explicitly
- Examples included
- Consequences stated
- Easy to find

**Core Rules Every Group Needs**:
1. Be respectful
2. Stay on topic
3. No spam/self-promotion (unless allowed)
4. No harassment
5. Follow platform guidelines

**Enforcement Principles**:
- Consistent application
- Fair treatment
- Document decisions
- Explain actions

### Warning Systems

**Progressive Discipline**:
1. Private reminder
2. Official warning
3. Temporary restriction
4. Removal

**Warning Format**:
"Hi [Name], your post/comment violated [rule]. Please [action needed]. This is a [first/second] warning. Questions? DM me."

**Documentation**:
Keep records of warnings.
Helps with consistency and appeals.

### Ban Decisions

**When to Ban**:
- Repeated violations after warnings
- Severe violations (no warning needed)
- Bad faith participation
- Harassment

**Types of Bans**:
- Temporary (cooldown period)
- Permanent (no return)
- Shadow (see but can't post)

**Ban Communication**:
Explain why clearly.
Leave door open for appeal if appropriate.

**Hard Decisions**:
Sometimes popular members break rules.
Apply rules fairly regardless.

🔥 **Action Step**: Write your group rules. Include examples for clarity.`
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
        ],
        content: `## Building Your Team

You'll need help as the group grows.

### Mod Recruitment

**When to Add Mods**:
- 50+ active members
- You can't respond timely
- Different time zones needed
- Specialized topics

**Who Makes Good Mods**:
- Active, positive members
- Good judgment
- Available time
- Aligned with values
- Conflict management skills

**How to Recruit**:
- Watch for natural leaders
- Invite specifically (don't post openly)
- Trial period first
- Start with limited permissions

### Training and Guidelines

**Mod Guidelines Document**:
- How to handle situations
- What decisions they can make
- When to escalate
- Communication standards

**Training Process**:
1. Share guidelines
2. Walk through examples
3. Shadow period
4. Gradual responsibility
5. Regular check-ins

**Decision Framework**:
- Minor issues: Handle independently
- Medium issues: Consult before action
- Major issues: Escalate to you

### Mod Communication

**Stay Connected**:
- Private mod channel
- Regular mod meetings
- Shared documentation
- Quick response expectations

**Mod Appreciation**:
- Thank them regularly
- Recognize contributions
- Give perks when possible
- Listen to their feedback

🔥 **Action Step**: Identify 2-3 potential mods from your most engaged members.`
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
        ],
        content: `## Long-Term Community Health

Groups die slowly if not maintained. Keep yours thriving.

### Preventing Stagnation

**Signs of Stagnation**:
- Decreasing activity
- Same people posting
- Repetitive content
- Member complaints

**Prevention Strategies**:
- Regular new content formats
- Fresh topics and themes
- New member integration
- Periodic reinvention

**Shake Things Up**:
- New recurring events
- Community challenges
- Collaborations with other groups
- Member-led initiatives

### Evolving with Members

**Members Change**:
- Beginners become experts
- Interests shift
- Needs evolve

**How to Evolve**:
- Regular member surveys
- Watch for new needs
- Adapt offerings
- Add new tracks/topics

**Don't Be Afraid to Pivot**:
If the group needs to change, change it.
Better than dying slowly.

### Leadership Succession

**You Won't Lead Forever**:
- Burnout happens
- Life changes
- Opportunities arise

**Build Leaders**:
- Delegate real responsibility
- Develop mod skills
- Share leadership publicly
- Create succession plan

**Succession Planning**:
- Identify potential leaders
- Give them increasing authority
- Document everything
- Prepare for transition

### Congratulations!

You've completed "Leading Groups"!

You now understand:
- Purpose-driven creation
- Setting up for success
- Building culture
- Growing membership
- Driving engagement
- Effective moderation
- Building teams
- Long-term sustainability

🔥 **Final Action Step**: Create your group launch plan. Set a date to go live.`
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
        ],
        content: `## Finding Your Cause

Use your platform for good. Start with what matters to you.

### Values Alignment

**Start With You**:
- What issues keep you up at night?
- What changes do you want to see?
- What are you naturally passionate about?

**Authentic Connection**:
- You'll talk about it more
- Your passion shows through
- More sustainable long-term
- Audience trusts authenticity

**Avoid**:
- Causes just because they're popular
- Issues you don't understand
- Performative activism

### Audience Interest Mapping

**What Does Your Audience Care About?**
- Poll them directly
- Watch what they engage with
- Read their comments
- Notice their concerns

**Overlap Zone**:
Your passions ∩ Their interests = Maximum impact

**Example**:
You care about: Education access
Your audience cares about: Web3 opportunities
Overlap: Web3 education for underserved communities

### Cause Research

**Before You Advocate**:
- Understand the issue deeply
- Know the organizations working on it
- Learn from those affected
- Understand counterarguments

**Research Sources**:
- Academic research
- Nonprofit reports
- Affected community voices
- Expert interviews

**Red Flags**:
- Organizations with overhead problems
- Causes with unclear goals
- Issues where your voice isn't needed

🔥 **Action Step**: List 3 causes you care about. Research one deeply this week.`
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
        ],
        content: `## Creating Impactful Content

Change minds and inspire action through content.

### Storytelling for Impact

**Story > Statistics**:
"One person's story" beats "millions affected"
Statistics inform, stories move.

**Story Structure**:
1. Person/situation (relatable)
2. Challenge/problem
3. Impact on them
4. What could change
5. Call to action

**Whose Story?**:
- Affected individuals (with permission)
- Your own connection
- Community voices

### Facts and Emotion Balance

**Both Matter**:
- Facts build credibility
- Emotion drives action
- Together = persuasion

**Formula**:
Hook with emotion → Support with facts → Close with emotion

**Fact Presentation**:
- Cite sources
- Use visuals
- Make numbers relatable
- Context matters

**Emotional Elements**:
- Personal stories
- Visual imagery
- Music and tone
- Direct address

### Call to Action Design

**Clear Actions**:
- What specifically should they do?
- Make it easy
- One primary action
- Immediate if possible

**Action Types**:
- Donate (direct impact)
- Share (spread awareness)
- Sign (petition/pledge)
- Learn (education)
- Volunteer (time)

**Good CTA Examples**:
- "Donate $5 to [org] today"
- "Share this with 3 friends"
- "Learn more at [link]"

🔥 **Action Step**: Create one piece of advocacy content with a clear call to action.`
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
        ],
        content: `## Working With Organizations

Partnerships amplify your impact.

### Finding Partners

**Types of Partners**:
- Established nonprofits
- Grassroots organizations
- Social enterprises
- Other creators

**How to Find Them**:
- Research organizations in your cause area
- Ask your audience for recommendations
- Attend events (virtual or IRL)
- Look for local chapters

**Vetting Organizations**:
- Check Charity Navigator ratings
- Review their financials
- Talk to people they serve
- Understand their approach

### Collaboration Structures

**Partnership Types**:
- Awareness campaigns
- Fundraising drives
- Volunteer promotion
- Content collaboration
- Ambassador programs

**What You Offer**:
- Audience reach
- Content creation skills
- Community engagement
- Fresh perspectives

**What They Offer**:
- Credibility
- Resources and information
- Access to stories
- Official backing

### Maintaining Authenticity

**Stay True**:
- Only partner with aligned organizations
- Maintain editorial independence
- Be transparent about relationships
- Don't compromise your voice

**Disclosure**:
Always disclose partnerships.
Your audience deserves honesty.

**When to Say No**:
- Misaligned values
- Poor reputation
- Restricting content
- Feels transactional

🔥 **Action Step**: Reach out to one organization you admire. Express interest in collaboration.`
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
        ],
        content: `## Fundraising That Works

Turn your influence into donations.

### Campaign Design

**Campaign Elements**:
- Clear cause explanation
- Specific funding need
- Timeline
- Progress tracking
- Thank you plan

**Campaign Types**:
- One-time fundraisers
- Ongoing support drives
- Emergency response
- Matching campaigns
- Birthday fundraisers

### Goal Setting

**Right-Sized Goals**:
- Achievable but ambitious
- Based on audience size
- Specific use of funds
- Stretch goals for momentum

**Goal Framework**:
| Audience Size | Realistic Goal |
|--------------|----------------|
| 1,000 | $500-1,000 |
| 10,000 | $5,000-10,000 |
| 100,000 | $50,000+ |

**Milestones**:
Break big goals into smaller wins.
Celebrate each milestone publicly.

### Transparency and Trust

**Be Transparent About**:
- Where money goes
- Who receives it
- Your relationship to cause
- Any compensation you receive

**Building Trust**:
- Show receipts/proof
- Update on progress
- Thank donors publicly
- Report on impact

**After Campaign**:
- Report total raised
- Show how it was used
- Share impact stories
- Thank everyone again

🔥 **Action Step**: Plan a small fundraiser ($500 goal). Identify the cause and organization.`
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
        ],
        content: `## Navigating Sensitive Issues

Some topics need extra care. Here's how to handle them responsibly.

### Trigger Warnings and Sensitivity

**When to Use Warnings**:
- Content about trauma
- Graphic imagery
- Distressing topics
- Personal disclosures

**How to Warn**:
"Content warning: This discusses [topic]. Take care of yourself."

**Presentation Considerations**:
- Allow people to opt out
- Don't surprise with graphic content
- Consider timing
- Provide resources

### Fact-Checking Importance

**Why It Matters More**:
- Sensitive topics = higher stakes
- Misinformation causes harm
- Credibility essential

**Fact-Checking Process**:
1. Verify claims from multiple sources
2. Check source credibility
3. Consult experts when possible
4. Update if you get it wrong

**When Unsure**:
Say "I'm still learning about this"
Better than spreading misinformation.

### Avoiding Harm

**Potential Harms**:
- Triggering trauma
- Spreading misinformation
- Exploitation of suffering
- Speaking over affected people

**Harm Reduction**:
- Center affected voices
- Provide resources
- Consider impact
- Accept feedback gracefully

**If You Make a Mistake**:
- Acknowledge it
- Apologize sincerely
- Correct the record
- Learn and improve

🔥 **Action Step**: Identify one sensitive topic you might cover. Research how to discuss it responsibly.`
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
        ],
        content: `## Tracking Your Impact

Show the difference you've made.

### Impact Metrics

**What to Track**:
- Money raised
- Awareness reach (views, shares)
- Actions taken (donations, sign-ups)
- Direct outcomes

**Beyond Numbers**:
- Stories of change
- Qualitative feedback
- Community responses
- Long-term shifts

**Creating Dashboard**:
Track metrics over time.
Show progress visually.

### Reporting to Supporters

**Regular Updates**:
- Campaign progress
- How funds were used
- Stories from beneficiaries
- What's next

**Report Format**:
- Simple and visual
- Honest about challenges
- Celebratory of wins
- Forward-looking

**When to Report**:
- End of campaigns
- Major milestones
- Quarterly/annually
- After significant events

### Celebrating Wins

**Why Celebrate**:
- Maintains momentum
- Thanks supporters
- Shows impact is real
- Inspires continued action

**Celebration Ideas**:
- Public thank you posts
- Sharing impact stories
- Milestone announcements
- Community recognition

### Congratulations!

You've completed "Positive Impact"!

You now understand:
- Finding your cause
- Creating advocacy content
- Building partnerships
- Fundraising effectively
- Handling sensitive topics
- Measuring impact

🔥 **Final Action Step**: Commit to one cause. Create your first piece of advocacy content.`
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
        ],
        content: `## Becoming an Ambassador

Ambassadors are the heart of community support.

### Ambassador Responsibilities

**What Ambassadors Do**:
- Welcome new users
- Answer questions
- Share knowledge
- Report issues
- Model positive behavior

**Daily Activities**:
- Monitor community channels
- Help lost users
- Share tips and resources
- Celebrate member wins
- Flag problems to team

**Time Commitment**:
A few hours per week makes a difference.
Quality over quantity.

### Impact of Good Ambassadors

**Why Ambassadors Matter**:
- First human contact for new users
- Reduce support burden
- Create welcoming atmosphere
- Catch problems early

**Success Stories**:
- "An ambassador helped me in my first hour"
- "I almost left, but someone welcomed me"
- "Made my first friend through an ambassador"

**The Ripple Effect**:
Help one person → They help others → Community grows stronger

### Recognition and Rewards

**Ambassador Perks**:
- Special badge on profile
- Access to ambassador channel
- Early feature previews
- Platform recognition
- AXM rewards for activity

**Growth Path**:
Ambassador → Senior Ambassador → Community Lead

🔥 **Action Step**: Decide if ambassadorship fits you. Apply if ready.`
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
        ],
        content: `## Welcoming New Members

The first moments matter most.

### Welcome Message Templates

**Basic Welcome**:
"Hey [Name], welcome to Lumina! Great to have you here. Let me know if you have any questions!"

**Helpful Welcome**:
"Welcome [Name]! Start by completing your profile and making your first post. Here's a quick guide: [link]. I'm here if you need help!"

**Personalized Welcome**:
"Hey [Name], I see you're into [interest from profile]. You'll fit right in! Check out [relevant group/content]. Welcome!"

**Key Elements**:
- Use their name
- Be warm and genuine
- Offer specific help
- Keep it brief

### Orientation Guidance

**First Steps to Share**:
1. Complete your profile
2. Connect your wallet
3. Make your first post
4. Follow some creators
5. Join a group

**Resources to Share**:
- Getting started guide
- FAQ page
- Popular content to follow
- Relevant groups

### Common New User Struggles

**Frequent Issues**:
- Wallet connection problems
- Confused by features
- Don't know what to post
- Feel overwhelmed

**How to Help**:
- Step-by-step guidance
- Link to resources
- Offer to answer questions
- Be patient

**Remember**:
What's obvious to you isn't to them.
Assume zero prior knowledge.

🔥 **Action Step**: Write 3 welcome message variations you can use.`
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
        ],
        content: `## Being a Helpful Resource

Accurate, kind answers build trust.

### Common Questions Database

**Know These Answers**:
- How do I connect my wallet?
- How do I earn AXM?
- How do rewards work?
- How do I create a post?
- How do I join groups?

**Build Your Knowledge**:
- Bookmark FAQ and help pages
- Save common answer templates
- Stay updated on platform changes
- Test features yourself

### When to Escalate

**Handle Yourself**:
- Basic how-to questions
- Feature explanations
- General guidance
- Navigation help

**Escalate to Support**:
- Technical bugs
- Account issues
- Payment problems
- Security concerns
- Policy violations

**How to Escalate**:
"I'll connect you with our support team who can help with this. [Tag support or provide link]"

### Teaching vs Telling

**Telling**:
"Click Settings, then Profile, then Edit."
- Quick but doesn't teach

**Teaching**:
"Look for the gear icon (Settings). From there, you can customize everything about your profile. Try it and let me know what you find!"
- Builds understanding

**When to Use Each**:
- Simple questions: Tell
- Complex questions: Teach
- Repeat questions: Teach (so they learn)

**Patience Matters**:
Some people need more help.
Never make them feel dumb.

🔥 **Action Step**: Learn answers to the 10 most common questions. Practice explaining them simply.`
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
        ],
        content: `## Handling Difficult Situations

Conflicts happen. Handle them gracefully.

### Staying Calm

**Your State Matters**:
Calm person = Calm conversation
Agitated person = Escalation

**Staying Centered**:
- Breathe before responding
- Take time to think
- Don't take it personally
- Remember: they're frustrated, not attacking you

**Signs You Need a Break**:
- Feeling defensive
- Wanting to "win"
- Getting angry
- Typing in ALL CAPS

### Empathetic Responses

**The Magic Formula**:
Acknowledge → Empathize → Help

**Example**:
Upset user: "This platform is broken! Nothing works!"

Bad response: "It works fine for everyone else."

Good response: "I can hear you're frustrated. That's really annoying when things don't work as expected. Let me help you figure out what's happening."

**Phrases That Help**:
- "I understand that's frustrating"
- "I'd feel the same way"
- "Let's figure this out together"
- "Thank you for your patience"

### When to Step Back

**Recognize These Signs**:
- Conversation going in circles
- Personal attacks starting
- No progress being made
- You're losing your cool

**How to Step Back**:
- "I want to make sure you get the right help. Let me bring in [someone else]."
- "I'm going to step away briefly, but I'll make sure someone assists you."

**It's Okay to Tag Out**:
You don't have to handle everything.
Getting help is smart, not weak.

🔥 **Action Step**: Practice the Acknowledge → Empathize → Help formula with three scenarios.`
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
        ],
        content: `## Being a Community Face

You represent us. Do it well.

### Brand Alignment

**Know the Values**:
- Positivity
- Helpfulness
- Web3 education
- Creator empowerment
- Community first

**Reflect These in**:
- How you communicate
- What content you create
- How you help others
- Your public presence

**Not Required**:
- Being perfect
- Only positive feedback
- Abandoning your personality

### Constructive Feedback

**Giving Platform Feedback**:
- Be specific
- Suggest solutions
- Use appropriate channels
- Be constructive, not destructive

**Example**:
Bad: "This feature is stupid"
Good: "I've noticed [feature] could work better if [suggestion]. What do you think?"

**Handling User Complaints**:
- Acknowledge the issue
- Report to appropriate team
- Follow up if possible

### Public vs Private Communication

**Public**:
- Formal and helpful
- Solution-focused
- Representative of community

**Private**:
- Can be more casual
- Deeper troubleshooting
- More personal connection

**When to Go Private**:
- Sensitive issues
- Personal information needed
- Extended troubleshooting
- Conflict resolution

### Congratulations!

You've completed "Volunteer Training"!

You now understand:
- Ambassador responsibilities
- Welcoming newcomers
- Answering questions
- De-escalation skills
- Representing community

🔥 **Final Action Step**: Apply to become an ambassador. Start helping one person per day.`
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
        ],
        content: `## Understanding Community Guidelines

Rules keep everyone safe. Here's what you need to know.

### Core Guidelines

**The Basics**:
1. **Be Respectful**: Treat everyone with dignity
2. **Be Honest**: No deception or fraud
3. **Be Safe**: Don't endanger yourself or others
4. **Be Legal**: Follow laws and regulations
5. **Be Authentic**: Be yourself, not someone else

**Golden Rule**:
Treat others as you'd want to be treated.
When in doubt, don't post.

### Prohibited Content Types

**Absolutely Not Allowed**:
- Hate speech and discrimination
- Harassment and bullying
- Violent or graphic content
- Sexual/explicit content
- Fraud and scams
- Copyright infringement
- Illegal activities
- Doxxing/private info sharing

**Crypto-Specific Rules**:
- No pump and dump schemes
- No financial fraud
- No wallet draining attempts
- No fake giveaways

### Consequence Tiers

**How Violations Are Handled**:

| Severity | Example | Consequence |
|----------|---------|-------------|
| Minor | Off-topic spam | Warning |
| Moderate | Mild harassment | Temp restriction |
| Serious | Hate speech | Account suspension |
| Severe | Scams/fraud | Permanent ban |

**Strike System**:
- 1st offense: Warning
- 2nd offense: 24-48 hour restriction
- 3rd offense: Extended suspension
- 4th offense: Permanent ban

🔥 **Action Step**: Read the full community guidelines. Bookmark them for reference.`
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
        ],
        content: `## Spotting Violations

Learn to identify problematic content.

### Common Violation Types

**Harassment**:
- Repeated unwanted contact
- Threats or intimidation
- Mocking or ridiculing
- Stalking behavior

**Scams**:
- "Send 1 ETH, get 2 back"
- Fake giveaways
- Impersonation
- Phishing links

**Spam**:
- Repetitive posts
- Irrelevant promotion
- Bot-like behavior
- Mass messaging

**Hate Content**:
- Discrimination based on identity
- Slurs and hate symbols
- Dehumanizing language
- Calls for violence

### Gray Area Navigation

**When It's Unclear**:
- Consider the intent
- Look at the context
- Think about impact
- When in doubt, report

**Gray Area Examples**:
- Heated debate vs harassment
- Criticism vs hate
- Joke vs offensive content
- Strong opinion vs incitement

**Ask Yourself**:
- Would this hurt someone?
- Is this creating an unsafe environment?
- Would you want this directed at you?

### Context Consideration

**Context Matters**:
Same words can be okay or not depending on:
- Who's saying it
- Who they're saying it to
- The surrounding conversation
- Cultural/group context

**Don't Jump to Conclusions**:
- Read the full thread
- Check profile for patterns
- Consider if it could be satire
- Look for clarification

🔥 **Action Step**: Review recent posts in your feed. Can you spot any potential violations?`
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
        ],
        content: `## Submitting Good Reports

Better reports = Better moderation.

### Reporting Process

**How to Report**:
1. Click the three dots (...) on content
2. Select "Report"
3. Choose violation category
4. Add details (optional but helpful)
5. Submit

**What Gets Reported**:
- Individual posts
- Comments
- Messages
- Profiles
- Groups

### Providing Context

**Good Report**:
"This user has sent me 5 unsolicited messages asking for wallet access after I said no."

**Weak Report**:
"This is bad"

**Include**:
- What rule was violated
- Any relevant history
- Impact on you/community
- Links to related content (if available)

**Be Specific**:
- Dates and times help
- Quote the problematic content
- Explain why it's harmful
- Include screenshots if needed

### Follow-up Expectations

**What Happens After**:
- Report is reviewed
- Action may be taken
- You may or may not be notified

**What You Won't See**:
- Specific action taken
- Details of investigation
- Other reports filed

**Timeline**:
- Most reports reviewed within 24-48 hours
- Complex cases may take longer
- Emergency reports prioritized

**If Nothing Happens**:
- Mods may have seen context you didn't
- Content may have been borderline
- You can report again with more info

🔥 **Action Step**: Familiarize yourself with the report button. Know where to find it.`
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
        ],
        content: `## Leading by Example

Be the community member you want to see.

### Positive Content Creation

**Create Content That**:
- Adds value
- Educates or entertains
- Builds connection
- Inspires positivity

**Avoid Content That**:
- Tears others down
- Spreads negativity
- Causes harm
- Violates guidelines

**Think Before Posting**:
- Would I want this saved forever?
- Would I be proud of this tomorrow?
- Does this help or hurt?

### Constructive Interactions

**Good Interactions**:
- Thoughtful comments
- Helpful feedback
- Genuine encouragement
- Respectful disagreement

**Handling Disagreement**:
- Focus on ideas, not people
- Stay calm
- Seek understanding
- Know when to walk away

**Calling In vs Calling Out**:
- Calling out: Public criticism
- Calling in: Private conversation
- Usually, calling in works better

### Supporting Others

**When You See Someone Struggling**:
- Reach out privately
- Offer support
- Share resources
- Don't judge

**When You See Harassment**:
- Report it
- Support the target (if appropriate)
- Don't pile on
- Document if needed

**Community Care**:
- Check on quiet members
- Welcome newcomers
- Celebrate others' wins
- Share knowledge freely

### Congratulations!

You've completed "Safety & Guidelines"!

You now understand:
- Community guidelines
- Recognizing violations
- Effective reporting
- Being a safety role model

🔥 **Final Action Step**: Commit to being a positive force. Model the behavior you want to see.`
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
