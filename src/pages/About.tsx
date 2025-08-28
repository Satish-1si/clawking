
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Lightbulb, Heart, Zap, Trophy, Users, Play } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-orange-primary" />,
      title: "Our Mission",
      description: "To revolutionize entertainment by creating immersive gameplay experiences that seamlessly bridge the gap between virtual fun and tangible rewards."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-primary" />,
      title: "Innovation First",
      description: "We combine advanced technology with classic arcade charm to deliver unique and engaging moments that players can cherish, both online and offline."
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-primary" />,
      title: "Player-Focused",
      description: "Every game we create is designed with the player in mind, ensuring memorable experiences that connect digital and real worlds."
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-primary" />,
      title: "Digital Innovation",
      description: "At Lucratech Solutions, every game is a step towards redefining how the digital and real worlds connect through entertainment."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-light/30 via-white to-gray-50 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3')`
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-white shadow-soft border border-gray-200 text-orange-primary px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Heart className="h-4 w-4 mr-2" />
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionizing 
            <span className="text-orange-primary bg-gradient-to-r from-orange-primary to-orange-dark bg-clip-text text-transparent block">
              Entertainment
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate innovators dedicated to transforming how people experience entertainment by blending digital innovation with real-world excitement.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Lucratech Solutions was born from a simple yet powerful vision: to create entertainment experiences that matter both digitally and physically. We believe that gaming should be more than just virtual - it should create real connections, real excitement, and real rewards.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our flagship product, Claw King, represents everything we stand for. It takes the beloved arcade claw machine experience and reimagines it for the digital age, where players can win actual prizes while enjoying the nostalgic thrill of the arcade.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're not just building games - we're crafting experiences that bridge the gap between virtual entertainment and tangible rewards, creating moments that players can truly cherish.
              </p>
              <Button asChild size="lg" className="gradient-orange hover:bg-orange-hover text-white px-8 py-4 rounded-xl font-medium shadow-orange hover:shadow-elevated transition-all duration-300">
                <Link to="https://www.clawking.in/" target="_blank">
                  <Play className="mr-2 h-5 w-5" />
                  Experience Claw King
                </Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-white to-orange-light/20 p-8 rounded-3xl border border-gray-100 shadow-elevated">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-white p-4 rounded-2xl shadow-soft">
                  <div className="text-3xl font-bold text-orange-primary mb-2">10K+</div>
                  <div className="text-gray-600">Happy Players</div>
                </div>
                <div className="text-center bg-white p-4 rounded-2xl shadow-soft">
                  <div className="text-3xl font-bold text-orange-primary mb-2">500+</div>
                  <div className="text-gray-600">Real Prizes Won</div>
                </div>
                <div className="text-center bg-white p-4 rounded-2xl shadow-soft">
                  <div className="text-3xl font-bold text-orange-primary mb-2">1</div>
                  <div className="text-gray-600">Revolutionary Game</div>
                </div>
                <div className="text-center bg-white p-4 rounded-2xl shadow-soft">
                  <div className="text-3xl font-bold text-orange-primary mb-2">24/7</div>
                  <div className="text-gray-600">Entertainment Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide our mission to revolutionize entertainment and create meaningful connections between digital and real worlds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elevated transition-all duration-500 border-0 shadow-soft bg-gradient-to-b from-white to-gray-50/50 rounded-2xl group">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="p-3 bg-orange-light/50 rounded-2xl">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Built by Innovators</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our team combines expertise in gaming, technology, and user experience to create entertainment that truly connects digital innovation with real-world excitement.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-white to-orange-light/20 p-8 rounded-3xl border border-gray-100 shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="p-4 bg-orange-light/50 rounded-2xl w-fit mx-auto mb-4">
                <Trophy className="h-12 w-12 text-orange-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gaming Expertise</h3>
              <p className="text-gray-600">Deep understanding of what makes games engaging and rewarding</p>
            </div>
            <div className="bg-gradient-to-br from-white to-orange-light/20 p-8 rounded-3xl border border-gray-100 shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="p-4 bg-orange-light/50 rounded-2xl w-fit mx-auto mb-4">
                <Zap className="h-12 w-12 text-orange-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Innovation</h3>
              <p className="text-gray-600">Cutting-edge technology that bridges digital and physical worlds</p>
            </div>
            <div className="bg-gradient-to-br from-white to-orange-light/20 p-8 rounded-3xl border border-gray-100 shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="p-4 bg-orange-light/50 rounded-2xl w-fit mx-auto mb-4">
                <Users className="h-12 w-12 text-orange-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Player Focus</h3>
              <p className="text-gray-600">Every decision is made with our players' experience in mind</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
