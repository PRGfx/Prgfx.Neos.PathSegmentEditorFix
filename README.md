# Prgfx.Neos.PathSegmentEditorFix

Regenerating the path segment currently has some opinionated replacements (e.g.
`&` to `and`).
See the PR against the neos UI for details: [neos/neos-ui!3167](https://github.com/neos/neos-ui/pull/3167)

> `composer require prgfx/neos-pathsegment-edtor-fix`

This package resets these defaults and lets you configure custom defaults like
that:
```yaml
'Neos.Neos:Document':
  properties:
    uriPathSegment:
      ui:
        inspector:
          editorOptions:
            replaceCharacters:
              /: slash
              💾: Neos.Neos:Main:save
```
When using translations, keep in mind that the value will be translated to the
current interface language and not to the document language.
