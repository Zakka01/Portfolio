// Configuration Tailwind pour toutes les variantes de la police Poly
import plugin from 'tailwindcss/plugin';

export default {
  theme: {
    extend: {
      fontFamily: {
        polysansbulky: ["var(--font-polysans-bulky)", "sans-serif"],
        polysansbulkymono: ["var(--font-polysans-bulkymono)", "monospace"],
        polysansbulkywide: ["var(--font-polysans-bulkywide)", "sans-serif"],
        polysansmedianmono: ["var(--font-polysans-medianmono)", "monospace"],
        polysansmedianwide: ["var(--font-polysans-medianwide)", "sans-serif"],
        polysansneutral: ["var(--font-polysans-neutral)", "sans-serif"],
        polysansneutralmono: ["var(--font-polysans-neutralmono)", "monospace"],
        polysansneutralwide: ["var(--font-polysans-neutralwide)", "sans-serif"],
        polysansslim: ["var(--font-polysans-slim)", "sans-serif"],
        polysansslimmono: ["var(--font-polysans-slimmono)", "monospace"],
        polysansslimwide: ["var(--font-polysans-slimwide)", "sans-serif"],
      }
    }
  },
  plugins: [plugin(function() {})]
};
