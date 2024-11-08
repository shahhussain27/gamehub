export const getBrightness = (r, g, b) => {
    return 0.299 * r + 0.587 * g + 0.114 * b;
  };

export  const getSaturation = (r, g, b) => {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    if (max === 0) return 0;
    return (max - min) / max;
  };

export  const getVibrantColor = (palette) => {
    const vibrantColors = palette.filter(
      ([r, g, b]) => getSaturation(r, g, b) > 0.3
    );
    vibrantColors.sort((a, b) => {
      const brightnessA = a[0] * 0.299 + a[1] * 0.587 + a[2] * 0.114;
      const brightnessB = b[0] * 0.299 + b[1] * 0.587 + b[2] * 0.114;
      return brightnessB - brightnessA; // Descending order
    });
    return vibrantColors[0] || palette[0];
  };
