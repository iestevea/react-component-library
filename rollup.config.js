// import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [{
    file: packageJson.main,
    format: "cjs",
    sourcemap: true
  },
  {
    file: packageJson.module,
    format: "esm",
    sourcemap: true
  }],
  plugins: [
    peerDepsExternal(),
    image(),
    postcss(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
    // babel({
    //   presets: ["@babel/preset-react"],
    // }),
    commonjs(),
  ]
};