import {StructureResolver} from 'sanity/desk'

export const deskStructure: StructureResolver = (S) => {
  return S.list()
    .title('Vision Venture')
    .items([
      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings'].includes(listItem.getId()!)
      ),
    ])
}
