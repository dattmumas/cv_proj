import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container flex">
        <div className="grid grid-columns-2 gap-4 place-content-stretch">
          <Card>
            <CardHeader>
              <CardTitle>Matthew Dumas, MBA</CardTitle>
              <CardDescription>Finance and Accounting Expert</CardDescription>
              <CardDescription>Tech and Product Connosieur</CardDescription>
              <CardContent>
                <p className="text-md text-">
                  I am a finance and accounting expert with a passion for business development, culture, and startups. I have a wealth of experience in finance, accounting, tech, CPG, data, business intelligence, and am a USMC veteran. 
                </p>
              </CardContent>
              <CardContent>
                <p>
                  I also have a deep passion for software and product development. Please continue to see the products I have developed with the Venture Capital space in mind.
                </p>
              </CardContent>
              <Button asChild variant='outline'>
                <Link href='/resume'>Continue</Link>
              </Button>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
