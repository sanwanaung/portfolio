interface XtermLoadingProps {
  message: string;
  description?: string;
}

const XtermLoading = ({ message, description }: XtermLoadingProps) => {
  return (
    <div className="flex items-center text-terminal-green p-3">
      <p>{message}</p>
      {description && <p>{description}</p>}
    </div>
  );
};

export default XtermLoading;
