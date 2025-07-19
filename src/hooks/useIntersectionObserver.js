import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
    const [entry, setEntry] = useState(null);
    const [node, setNode] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();

        observer.current = new window.IntersectionObserver(([entry]) => setEntry(entry), options);

        if (node) observer.current.observe(node);

        return () => observer.current.disconnect();
    }, [node, options]);

    return [setNode, entry];
};

export default useIntersectionObserver;