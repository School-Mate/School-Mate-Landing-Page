import { CheckRouting } from "@/lib/utils";
import NotFound from "../_component/NotFound";
import Applinking from "./_component/Applinking";

interface HybridRoutingPath {
  params: {
    hybridpath: string[];
  };
}

const HybridRouting = ({ params }: HybridRoutingPath) => {
  const routingpath = "/" + params.hybridpath.join("/");
  const path = CheckRouting(params.hybridpath);
  if (!path) return <NotFound />;

  return <Applinking path={routingpath} />;
};

export default HybridRouting;
