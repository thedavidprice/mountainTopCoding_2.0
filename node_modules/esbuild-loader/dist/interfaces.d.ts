import { TransformOptions } from 'esbuild';
import { Except } from 'type-fest';
declare type Filter = string | RegExp;
declare type FilterObject = {
    include?: Filter | Filter[];
    exclude?: Filter | Filter[];
};
declare type LoaderOptions = Except<TransformOptions, 'sourcemap' | 'sourcefile'>;
declare type MinifyPluginOptions = Except<TransformOptions, 'sourcefile'> & FilterObject;
export { LoaderOptions, MinifyPluginOptions, };
