// src/data/mockData.js

export const initialMoods = [
  { id: 'happy', emoji: '😊', label: 'Happy' },
  { id: 'calm', emoji: '😌', label: 'Calm' },
  { id: 'neutral', emoji: '😐', label: 'Neutral' },
  { id: 'sad', emoji: '😔', label: 'Sad' },
  { id: 'anxious', emoji: '😟', label: 'Anxious' },
  { id: 'stressed', emoji: '😩', label: 'Stressed' },
];

export const mockJournalEntries = [
  {
    id: 'j1',
    date: '2025-06-23',
    time: '10:30 AM',
    content: 'Had a really productive morning today! Finished my high-priority tasks and even had time for a short meditation. Feeling accomplished.',
  },
  {
    id: 'j2',
    date: '2025-06-22',
    time: '08:00 PM',
    content: 'Felt a bit overwhelmed by the news tonight. Decided to write down my thoughts instead of bottling them up. It helped clear my head.',
  },
  {
    id: 'j3',
    date: '2025-06-21',
    time: '02:15 PM',
    content: 'Gratitude check: grateful for a sunny day and a good cup of coffee. Small things make a difference.',
  },
];

export const mockCommunityPosts = [
  {
    id: 'p1',
    author: 'Fiona',
    time: '2 hours ago',
    text: 'Took a big step forward in my healing journey today! Managed to have a difficult conversation I\'d been avoiding. Feeling lighter.',
    likes: 12,
    comments: 4,
    avatar: 'https://i.pravatar.cc/40?img=1', // Mock avatar
  },
  {
    id: 'p2',
    author: 'Sarah L.',
    time: '3 hours ago',
    text: 'Just wanted to share a small win today! I managed to meditate for 10 minutes straight, even with distractions. It\'s a small step, but it feels good to be consistent. Keep going everyone!',
    likes: 28,
    comments: 7,
    avatar: 'https://i.pravatar.cc/40?img=2', // Mock avatar
  },
  {
    id: 'p3',
    author: 'Alex M.',
    time: 'Yesterday',
    text: 'Anyone else struggle with perfectionism? It\'s exhausting trying to get everything just right. Tips for letting go?',
    likes: 5,
    comments: 2,
    avatar: 'https://i.pravatar.cc/40?img=3', // Mock avatar
  },
];

export const mockChatrooms = [
  { id: 'anxiety', name: 'Anxiety Support', icon: 'fas fa-hand-holding-heart' },
  { id: 'productivity', name: 'Productivity Hacks', icon: 'fas fa-lightbulb' },
  { id: 'mindfulness', name: 'Mindfulness Journey', icon: 'fas fa-leaf' },
  { id: 'general', name: 'General Chat', icon: 'fas fa-comments' },
];