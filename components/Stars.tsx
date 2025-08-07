"use client";

export default function Stars() {
  return (
    <>
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => {
          const animationClass = `animate-star-${(i % 4) + 1}`;
          return (
            <div
              key={i}
              className={`absolute w-0.5 h-0.5 bg-white/60 rounded-full ${animationClass}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            ></div>
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes star-float-1 {
          0%,
          100% {
            opacity: 0.3;
            transform: translate(0px, 0px) scale(1);
          }
          25% {
            opacity: 1;
            transform: translate(15px, -10px) scale(1.2);
          }
          50% {
            opacity: 0.7;
            transform: translate(-10px, -20px) scale(1.1);
          }
          75% {
            opacity: 0.9;
            transform: translate(20px, -5px) scale(1.3);
          }
        }

        @keyframes star-float-2 {
          0%,
          100% {
            opacity: 0.4;
            transform: translate(0px, 0px) scale(1);
          }
          25% {
            opacity: 0.8;
            transform: translate(-15px, 10px) scale(1.1);
          }
          50% {
            opacity: 1;
            transform: translate(10px, 20px) scale(1.3);
          }
          75% {
            opacity: 0.6;
            transform: translate(-5px, -15px) scale(1.2);
          }
        }

        @keyframes star-float-3 {
          0%,
          100% {
            opacity: 0.2;
            transform: translate(0px, 0px) scale(1);
          }
          25% {
            opacity: 0.9;
            transform: translate(25px, 15px) scale(1.4);
          }
          50% {
            opacity: 0.5;
            transform: translate(-20px, -10px) scale(1.1);
          }
          75% {
            opacity: 1;
            transform: translate(5px, 25px) scale(1.2);
          }
        }

        @keyframes star-float-4 {
          0%,
          100% {
            opacity: 0.5;
            transform: translate(0px, 0px) scale(1);
          }
          25% {
            opacity: 0.7;
            transform: translate(-20px, -15px) scale(1.3);
          }
          50% {
            opacity: 1;
            transform: translate(15px, -25px) scale(1.1);
          }
          75% {
            opacity: 0.3;
            transform: translate(-10px, 10px) scale(1.4);
          }
        }

        .animate-star-1 {
          animation: star-float-1 4s ease-in-out infinite;
        }
        .animate-star-2 {
          animation: star-float-2 5s ease-in-out infinite;
        }
        .animate-star-3 {
          animation: star-float-3 3.5s ease-in-out infinite;
        }
        .animate-star-4 {
          animation: star-float-4 4.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
