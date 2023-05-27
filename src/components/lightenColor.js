import React from 'react';

const lightenColor = (color, percent) => {
    // Remove the "#" symbol from the color string
    color = color.replace("#", "");

    // Parse the color values (RGB) from the hex string
    const r = parseInt(color.substr(0, 2), 16);
    const g = parseInt(color.substr(2, 2), 16);
    const b = parseInt(color.substr(4, 2), 16);

    // Calculate the new lightened color values
    const lightenedR = Math.round(r + (255 - r) * (percent / 100));
    const lightenedG = Math.round(g + (255 - g) * (percent / 100));
    const lightenedB = Math.round(b + (255 - b) * (percent / 100));

    // Convert the lightened color values back to a hex string
    return "#" + (lightenedR << 16 | lightenedG << 8 | lightenedB).toString(16).padStart(6, "0");
};


export default lightenColor;