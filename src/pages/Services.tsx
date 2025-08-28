import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Gamepad2, Trophy, Zap, Users, Star, Play, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const games = [
    {
      icon: <Gamepad2 className="h-12 w-12 text-orange-primary" />,
      title: "Claw King",
      description: "Experience the thrill of classic arcade claw machines reimagined for the digital age.",
      features: ["Real prizes you can win", "Classic arcade experience", "Compete globally"],
      link: "",
      status: "Available Now"
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
            Gaming Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our Games
            <span className="text-orange-primary block bg-gradient-to-r from-orange-primary to-orange-dark bg-clip-text text-transparent">
              Where Fun Meets Reality
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover our collection of innovative games that bridge the digital and physical worlds. Each game is designed to deliver real rewards and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Player Statistics Section */}
      <section className="py-12 bg-gradient-to-br from-gray-100/50 to-orange-light/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Growing Community</h2>
            <p className="text-lg text-gray-600">
              Thousands of players are already enjoying our games and winning real prizes!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
            <div className="bg-gradient-to-br from-orange-light/50 to-orange-light/30 p-6 rounded-2xl shadow-soft hover:shadow-md transition-all duration-300 transform hover:scale-105 text-center">
              <div className="text-3xl font-bold text-orange-primary mb-2">10K+</div>
              <div className="text-sm text-gray-600 font-medium">Active Players</div>
            </div>
            <div className="bg-gradient-to-br from-orange-light/50 to-orange-light/30 p-6 rounded-2xl shadow-soft hover:shadow-md transition-all duration-300 transform hover:scale-105 text-center">
              <div className="text-3xl font-bold text-orange-primary mb-2">500+</div>
              <div className="text-sm text-gray-600 font-medium">Prizes Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Games */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Now</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to play games that offer real rewards and endless entertainment.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
            {games.map((game, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elevated transition-all duration-500 border-0 shadow-soft bg-gradient-to-b from-white/90 to-gray-50/60 backdrop-blur-sm rounded-2xl group">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-orange-light/50 to-orange-light/30 rounded-2xl shadow-soft group-hover:scale-110 transition-transform duration-300">
                        {game.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900">{game.title}</CardTitle>
                        <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mt-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                          {game.status}
                        </div>
                      </div>
                    </div>
                    
                    <CardDescription className="text-lg text-gray-600 leading-relaxed">
                      {game.description}
                    </CardDescription>
                    
                    <div className="space-y-3">
                      {game.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild size="lg" className="gradient-orange hover:bg-orange-hover text-white px-8 py-3 rounded-xl font-medium shadow-orange hover:shadow-elevated transform hover:scale-105 transition-all duration-300">
                      <Link to={game.link} target="_blank">
                        <Play className="mr-2 h-5 w-5" />
                        Play Now
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-elevated border border-gray-200/50 text-center">
                      <img 
                        src="/lovable-uploads/81b8125c-13fd-430f-bf82-b3dcdad620a5.png" 
                        alt="Claw King Logo" 
                        className="h-32 w-auto mx-auto mb-4 hover:scale-110 transition-transform duration-300"
                      />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Win?</h3>
                      <p className="text-gray-600 text-sm">
                        Join thousands of players already winning real prizes!
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Winning?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our gaming community today and start experiencing games that offer real rewards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-orange hover:bg-orange-hover text-white px-8 py-4 rounded-xl font-medium shadow-orange hover:shadow-elevated transform hover:scale-105 transition-all duration-300">
              <Link to="https://www.clawking.in/" target="_blank">
                <Play className="mr-2 h-5 w-5" />
                Play Claw King Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 hover:shadow-soft px-8 py-4 rounded-xl font-medium transform hover:scale-105 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm">
              <Link to="/contact">Get Updates</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
