import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { imams } from '@/lib/utils'
import { Checkbox } from './ui/checkbox'

export function SidebarUp() {
  return (
    <Tabs defaultValue='imams' className='pt-16 px-2'>
      <TabsList className='grid w-full grid-cols-3'>
        <TabsTrigger value='imams'>Imams</TabsTrigger>
        <TabsTrigger value='play'>Play</TabsTrigger>
        <TabsTrigger value='search'>Search</TabsTrigger>
      </TabsList>
      <TabsContent value='imams'>
        <Card>
          <CardContent className='space-y-2'>
            <div className='mt-6'>
              <Select defaultValue='dr_coulibaly_sekou_hafs'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {imams.map((imam) => (
                      <SelectItem key={imam.value} value={imam.value!}>
                        {imam.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='items-top flex space-x-2 pt-4'>
              <Checkbox id='imams_reading_by_ayat' />
              <div className='grid gap-1.5 leading-none'>
                <label
                  htmlFor='imams_reading_by_ayat'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                  Lecture des Imams / ayat
                </label>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='play'>
        <Card>
          <CardContent className='space-y-2'>Play</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='search'>
        <Card>
          <CardContent className='space-y-2'>Search</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
