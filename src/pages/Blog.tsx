
import Navbar from "@/components/Navbar";

const blogPosts = [
  {
    id: 1,
    title: "5 Tips for a Healthier Lifestyle",
    date: "2024-05-01",
    excerpt: "Adopt these easy changes for a more energetic and healthier life.",
    image: "/Blog/event1.png"
  },
  {
    id: 2,
    title: "How Preventive Health Checks Save Lives",
    date: "2024-06-01",
    excerpt: "Discover why regular screenings are critical for early detection.",
    image: "/Blog/event2.png"
  },
  {
    id: 3,
    title: "Understanding Your Blood Test",
    date: "2024-04-15",
    excerpt: "A doctor's guide to making sense of your blood report.",
    image: "/Blog/event3.png"
  }
];

const Blog = () => (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <Navbar />
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Blog & Health Tips</h1>
        <p className="text-xl text-gray-600">Welcome to our resource center for wellness articles, news, and updates.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <article key={post.id} className="bg-white rounded-2xl shadow p-6 flex flex-col items-start animate-fade-in">
            <img src={post.image} alt={post.title} className="w-full h-32 object-cover rounded mb-4" />
            <p className="text-xs text-blue-500 uppercase mb-1">{new Date(post.date).toLocaleDateString()}</p>
            <h2 className="font-bold text-xl mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <button className="ml-auto text-blue-600 font-medium hover:underline">Read More</button>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default Blog;
