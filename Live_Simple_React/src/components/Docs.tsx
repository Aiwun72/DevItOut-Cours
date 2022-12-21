/**
 * Docs components
 * 
 * TODO: Ajouter la possibilité de changer la couleur
 * FIXME: Add () to return
 */

interface Props {
    text: String;
}

export default ({ text } : Props) => {
    return <p className="read-the-docs font-bold text-primary-100 dark:text-red-500 text-[150px]" style={{ lineHeight: '150px' }}>
        {text}
    </p>
}
