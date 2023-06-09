export const Input = (props) => {
    let input = (
        <input
            placeholder = { props.placeholder }
            type = { props.type }
            { ...props.register } />
    );

    if (props.tag === 'textarea') {
        input = (
            <textarea
                placeholder = { props.placeholder }
                { ...props.register }>

            </textarea>
        );
    }

    if (props.tag === 'select') {
        const optionJSX = props.options?.map((option) => {
            return (
                <option key = { option.value } value = { option.value }>
                    { option.name }
                </option>
            );
        });
        input = <select { ...props.register }>{ optionJSX }</select>;
    }

    return (<label>
        <div>
            <span className = 'error-message'>{ props.error?.message }</span>
        </div>
        { input }
    </label>
    );
};

Input.defaultProps = {
    type: 'text',
    tag:  'input',
};
