import Lampada from "@/components/Lampada";

export default function Home() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <Lampada> </Lampada>
        </div>
        <div className="col-4">
          <Lampada> </Lampada>
        </div>
        <div className="col-4">
          <Lampada> </Lampada>
        </div>
      </div>
    </div>
  );
}

