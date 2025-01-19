import Link from 'next/link';
import Image from 'next/image';

type CategoryProps = React.ComponentPropsWithoutRef<'div'> & {
  icon: string;
  href: string;
  title: string;
  description: string;
};

function Category(props: CategoryProps) {
  const { icon, href, title, description, ...rest } = props;

  return (
    <div {...rest}>
      <Image
        src={icon}
        alt={`${title} icon`}
        width={64}
        height={40}
        priority
        aria-hidden={true}
      />
      <h2 className="mt-[2.1875rem] font-shoulders text-[2.5rem] font-bold uppercase leading-[3rem] text-[#F2F2F2]">
        {title}
      </h2>
      <p className="-ml-[.0313rem] mt-[1.5625rem] font-lexend text-[.9375rem] leading-[1.5625rem] text-white/75">
        {description}
      </p>
      <Link
        href={href}
        className="mt-[1.5625rem] flex h-12 w-[9.125rem] items-center justify-center text-nowrap rounded-[1.5625rem] border-2 border-[#F2F2F2] bg-[#F2F2F2] px-4 text-center font-lexend text-[.9375rem] leading-[1.5625rem] transition-colors duration-300 hover:bg-transparent hover:text-white lg:mt-[5.1875rem]"
      >
        Learn More
      </Link>
    </div>
  );
}

const categories = [
  {
    href: '#',
    title: 'Sedans',
    icon: '/icon-sedans.svg',
    description:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    className: 'bg-[#E28625] px-[3.0625rem] py-12 text-[#E28625] lg:p-12',
  },
  {
    href: '#',
    title: 'Suvs',
    icon: '/icon-suvs.svg',
    description:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    className: 'bg-[#006971] px-[3.0625rem] py-12 text-[#006971] lg:p-12',
  },
  {
    href: '#',
    title: 'Luxury',
    icon: '/icon-luxury.svg',
    description:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    className: 'bg-[#004140] p-12 text-[#004140]',
  },
];

export function Categories() {
  return (
    <section className="grid grid-cols-1 place-content-center overflow-hidden rounded-lg max-lg:w-full max-lg:max-w-[20.4375rem] max-lg:grid-rows-3 lg:grid-cols-[19.1875rem_19.1875rem_19.125rem]">
      {categories.map((category) => (
        <Category key={category.title} {...category} />
      ))}
    </section>
  );
}
