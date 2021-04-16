import webpack from 'webpack';
import { MinifyPluginOptions } from './interfaces';
declare class ESBuildMinifyPlugin {
    private readonly options;
    constructor(options?: MinifyPluginOptions);
    apply(compiler: webpack.Compiler): void;
    transformAssets(compilation: webpack.compilation.Compilation, assetNames: string[]): Promise<void>;
}
export default ESBuildMinifyPlugin;
