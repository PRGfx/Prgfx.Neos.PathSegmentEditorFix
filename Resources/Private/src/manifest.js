import manifest from "@neos-project/neos-ui-extensibility";
import Editor from './editor';

manifest('Prgfx.Neos.NeosPathSegmentEditorFix', {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get('inspector').get('editors');
    editorsRegistry.set('Prgfx.Neos.NeosPathSegmentEditorFix/UriPathSegmentEditor', {
        component: Editor
    });
});
