
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, FlaskConical } from "lucide-react";

interface PackageProps {
  package: {
    id: number;
    name: string;
    price: string;
    originalPrice: string;
    duration: string;
    tests: number;
    description: string;
    features: string[];
    popular: boolean;
    icon: any;
  };
}

const PackageCard = ({ package: pkg }: PackageProps) => {
  const IconComponent = pkg.icon;
  
  return (
    <Card className={`relative h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
      pkg.popular ? 'ring-2 ring-blue-500 shadow-lg scale-105' : 'hover:shadow-lg'
    }`}>
      {pkg.popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-600 px-4 py-1">
          Most Popular
        </Badge>
      )}
      
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
          <IconComponent className="h-8 w-8 text-blue-600" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
        <p className="text-gray-600 mb-4">{pkg.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
            <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
          </div>
          
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <FlaskConical className="h-4 w-4" />
              <span>{pkg.tests} Tests</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900">Includes:</h4>
          <ul className="space-y-2">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          className={`w-full font-semibold ${
            pkg.popular 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
          }`}
          size="lg"
        >
          Book Now - {pkg.price}
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          * Fasting required for accurate results
        </p>
      </CardContent>
    </Card>
  );
};

export default PackageCard;
