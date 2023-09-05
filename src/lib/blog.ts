const PREFIX_INDEX = '/src/routes'.length;
const POSTFIX_LENGTH = '/Card.svx'.length;

export function mapBlogCards(imports: Record<string, any>) {
    return Object.entries(imports)
        .map(([path, component]: [string, any]) => ({
            path: path.substring(PREFIX_INDEX, path.length - POSTFIX_LENGTH),
            metadata: component.metadata,
            date: new Date(component.metadata.date),
            Card: component.default,
        }));
}