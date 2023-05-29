export const Comment = ({
    body, created, author, hash,
}) => {
    return (
        <li className = 'commentBody' key = { hash }>
            <p>
                { author.name }
                <span>{ created } </span>
            </p>
            <p>{ body }</p>
        </li>

    );
};
