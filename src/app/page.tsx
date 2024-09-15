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
                I am a finance and accounting expert with a passion for business development, culture, and startups. With deep experience in finance, accounting, tech, CPG, data, and business intelligence, I specialize in driving results for venture-backed companies. As a USMC veteran, I bring a strategic, disciplined approach to problem-solving. 
                </p>
              </CardContent>
              <CardContent>
                <p>
                I’m also passionate about software and product development, as a self-taught software developer I have created several of my own projects over the years. Please take a look at the products I’ve developed with VC and investors in mind.
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
