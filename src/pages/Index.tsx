
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Gamepad2, Trophy, Zap, Users, Star, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: <Gamepad2 className="h-12 w-12 text-orange-primary" />,
      title: "Immersive Gameplay",
      description: "Experience cutting-edge gaming that seamlessly blends virtual excitement with real-world rewards."
    },
    {
      icon: <Trophy className="h-12 w-12 text-orange-primary" />,
      title: "Tangible Rewards",
      description: "Win real prizes and rewards that extend beyond the digital realm, making every game meaningful."
    },
    {
      icon: <Zap className="h-12 w-12 text-orange-primary" />,
      title: "Advanced Technology",
      description: "Powered by innovative tech that creates unique connections between digital and physical experiences."
    },
    {
      icon: <Users className="h-12 w-12 text-orange-primary" />,
      title: "Community Driven",
      description: "Join a growing community of players who share the excitement of next-generation entertainment."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative container mx-auto px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-light/20 via-white to-gray-50/50 -z-10"></div>
        <div className="text-center max-w-4xl mx-auto relative z-10 animate-fade-in">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm shadow-soft border border-gray-200/60 text-gray-700 px-6 py-3 rounded-full text-sm font-medium mb-8 hover:shadow-md transition-all duration-300">
            <Star className="h-4 w-4 mr-2 text-orange-primary" />
            Revolutionizing Entertainment
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Where Digital Innovation
            <span className="text-orange-primary block bg-gradient-to-r from-orange-primary to-orange-dark bg-clip-text text-transparent">
              Meets Real-World Fun
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            At Lucratech Solutions, we're redefining entertainment by creating immersive gameplay experiences that bridge virtual excitement with tangible rewards. Every game is a step towards connecting digital and real worlds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="gradient-orange hover:bg-orange-hover text-white px-8 py-4 text-lg rounded-xl font-medium shadow-orange hover:shadow-elevated transform hover:scale-105 transition-all duration-300">
              <Link to="/PlayZone" target="_blank">
                <Play className="mr-2 h-5 w-5" />
                Play Claw King
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:shadow-soft px-8 py-4 text-lg rounded-xl font-medium transform hover:scale-105 transition-all duration-300 bg-white/70 backdrop-blur-sm">
              <Link to="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Claw King Feature Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100/50 to-orange-light/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-orange-primary/10 text-orange-primary px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-soft border border-orange-primary/20">
                <Trophy className="h-4 w-4 mr-2" />
                Our Flagship Product
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Introducing Claw King</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the thrill of classic arcade claw machines reimagined for the digital age. Win real prizes, compete with friends, and enjoy the perfect blend of nostalgia and innovation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl shadow-soft border border-gray-200/50 hover:shadow-md transition-all duration-300">
                  <div className="w-3 h-3 bg-orange-primary rounded-full shadow-sm animate-pulse"></div>
                  <span className="text-gray-600 font-medium">Real prizes you can actually win</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl shadow-soft border border-gray-200/50 hover:shadow-md transition-all duration-300">
                  <div className="w-3 h-3 bg-orange-primary rounded-full shadow-sm animate-pulse"></div>
                  <span className="text-gray-600 font-medium">Classic arcade experience, modernized</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl shadow-soft border border-gray-200/50 hover:shadow-md transition-all duration-300">
                  <div className="w-3 h-3 bg-orange-primary rounded-full shadow-sm animate-pulse"></div>
                  <span className="text-gray-600 font-medium">Compete with players worldwide</span>
                </div>
              </div>
              <Button asChild size="lg" className="gradient-orange hover:bg-orange-hover text-white px-8 py-4 rounded-xl font-medium shadow-orange hover:shadow-elevated transform hover:scale-105 transition-all duration-300">
                <Link to="https://www.clawking.in/" target="_blank">
                  Play Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-elevated border border-gray-200/50 text-center hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105">
              {/* Claw King Logo */}
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/81b8125c-13fd-430f-bf82-b3dcdad620a5.png" 
                  alt="Claw King Logo" 
                  className="h-32 w-auto mx-auto mb-4 hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Play?</h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of players already enjoying Claw King. The next big win could be yours!
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gradient-to-br from-orange-light/50 to-orange-light/30 p-4 rounded-2xl shadow-soft hover:shadow-md transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl font-bold text-orange-primary">10K+</div>
                    <div className="text-sm text-gray-500">Active Players</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-light/50 to-orange-light/30 p-4 rounded-2xl shadow-soft hover:shadow-md transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl font-bold text-orange-primary">500+</div>
                    <div className="text-sm text-gray-500">Prizes Won</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What we do best</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're pioneering the future of entertainment by creating experiences that matter both digitally and physically.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elevated transition-all duration-500 border-0 shadow-soft bg-gradient-to-b from-white/90 to-gray-50/60 backdrop-blur-sm rounded-2xl group hover:transform hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="p-3 bg-gradient-to-br from-orange-light/50 to-orange-light/30 rounded-2xl shadow-soft">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the revolution where every game connects digital innovation with real-world excitement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-orange hover:bg-orange-hover text-white px-8 py-4 rounded-xl font-medium shadow-orange hover:shadow-elevated transform hover:scale-105 transition-all duration-300">
              <Link to="" target="_blank">Start Playing</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 hover:shadow-soft px-8 py-4 rounded-xl font-medium transform hover:scale-105 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
