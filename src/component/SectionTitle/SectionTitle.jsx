/* eslint-disable react/prop-types */

const SectionTitle = ({ heading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="lg:text-4xl md:text-2xl text-base uppercase lg:border-y-4 md:border-y-2 border-y-2 md:py-4 " >{heading}</h3>
        </div>
    );
};

export default SectionTitle;