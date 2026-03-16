import { notification1 } from "../../../assets";
import { notificationImages } from "../../../constants";

const Notification = ({ title, className }) => {
  return (
    <div
      className={`${className || ""} flex  items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl `}
    >
      <div className="flex gap-5">
        <img
          src={notification1}
          alt="image"
          className="rounded-xl"
          width={62}
          height={62}
        />
        <h6 className="mb-1 font-semibold text-base">
          {title}
          <div className="flex items-center justify-between">
            <ul className="flex -m-0.5">
              {notificationImages.map((n, index) => (
                <li
                  key={index}
                  className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
                >
                  <img
                    src={n}
                    alt={n}
                    className="w-full"
                    width={20}
                    height={20}
                  />
                </li>
              ))}
            </ul>
            <div className="body-2 text-n-13 text-right">1m Ago.</div>
          </div>
        </h6>
      </div>
    </div>
  );
};

export default Notification;
