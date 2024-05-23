import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(optiops: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [optiops.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {

        },
    };
}
