// Confetti por https://www.kirilv.com/canvas-confetti/
import("https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.module.mjs").then((module) => {
  const confetti = module.default;
  confetti({
    particleCount: 200,
    spread: 90,
    origin: { y: 0.6 }
  });
});
