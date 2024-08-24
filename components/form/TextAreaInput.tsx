import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

function TextAreaInput({ name, labelText, defaultValue }: TextAreaInputProps) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue || tempDefaultDescription}
        rows={5}
        required
        className='leading-loose'
      />
    </div>
  );
}


const tempDefaultDescription = `Experience mountain-style glamping in our cozy A-frame cabin, nestled in a picturesque pine forest. \
  Enjoy modern comforts with AC, heat, Queen Bed, TV, and Wi-Fi while savoring breathtaking mountain views. \
  We're conveniently located near Yosemite National Park, home to iconic Half Dome and El Capitan, Sequoia groves, and the Pacific Crest Trail. \
  Hiking gear and maps are available for your adventures. The cabin features a private bathhouse, fire pit, and kitchenette. \
  Indulge in fresh local produce and relax in the crisp mountain air. Please note, we don't allow pets. \
  Our grounds are home to various wildlife including deer, squirrels, and numerous bird species. We also have our own friendly golden retriever. \
  This inspiring space offers tranquility amidst nature's beauty. Experience the changing seasons with wildflower blooms in spring and vibrant foliage in fall. \
  Don't miss our on-site artisan shop, where we offer a variety of local crafts and gourmet products for a true taste of mountain living.`;

  export default TextAreaInput;
  