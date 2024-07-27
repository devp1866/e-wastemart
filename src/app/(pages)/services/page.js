import Foot from "@/components/Foot"
import Nav from "@/components/Nav"

const posts = [
    {
      id: 1,
      title: 'Drop-off Locations',
      href: '#',
      description:
        'List physical locations where users can drop off their e-waste. Consider integrating a map for easy visualization.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      
    },
    {
      id: 2,
      title: 'Collection Events',
      href: '#',
      description:
        'Promote any upcoming e-waste collection events organized by the recycler or partnered organizations',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      
    },
    {
      id: 3,
      title: 'Bulk Collection Services',
      href: '#',
      description:
        ' Indicate if the recycler offers on-site or curbside pick-up services for businesses or large quantities of e-waste.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      
    },
    {
      id: 4,
      title: 'Data Wiping Services',
      href: '#',
      description:
        'Highlight if the recycler offers data wiping or destruction services for hard drives and other storage devices.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      
    },
  ]
  
  export default function Example() {
    return (
        <>
            
       
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Available services</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                
              </article>
            ))}
          </div>
        </div>
      </div> 
      
      </>
    )
  }
  