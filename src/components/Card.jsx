import "./styles.css";

export default function Card() {
    return (
        <div className="pt-20">
          <div className="card m-auto xs:card-body md:card-side bg-base-100 w-3/5 ">
            <figure className="">
              <img
                src="../public/img/fondo2.png"
                alt="card image"
                className="w-full"
              />
            </figure>
            <div className="card-body m-0 p-3">
              <h2 className="card-title">Find your perfect trip</h2>
              <p>
                Our app will help you find the perfect path for your next trip. With
                an easy-to-use interface and a host of itinerary option. Designed by
                insiders who know and love their cities!
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Access Cities</button>
              </div>
            </div>
          </div>
        </div>
      );
}
