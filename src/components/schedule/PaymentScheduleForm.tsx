'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { id as dateFnsLocaleId } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const scheduleSchema = z.object({
  amount: z.coerce.number().min(10000, { message: 'Jumlah minimal Rp 10.000.' }),
  frequency: z.enum(['daily', 'weekly', 'monthly'], {
    required_error: 'Frekuensi harus dipilih.',
  }),
  startDate: z.date({
    required_error: 'Tanggal mulai harus dipilih.',
  }),
  // Conditional fields based on frequency, could be added for more detail
  // dayOfWeek: z.string().optional(), // For weekly
  // dayOfMonth: z.coerce.number().optional(), // For monthly
});

type ScheduleFormValues = z.infer<typeof scheduleSchema>;

export default function PaymentScheduleForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ScheduleFormValues>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: {
      amount: 50000,
      frequency: 'weekly',
      startDate: new Date(),
    },
  });

  const onSubmit = async (values: ScheduleFormValues) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Payment schedule data:', values);

    toast({
      title: 'Jadwal Disimpan',
      description: `Setoran rutin ${values.frequency} sebesar ${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(values.amount)} telah diatur.`,
      variant: 'default',
    });
    setIsLoading(false);
    form.reset(); // Reset form after successful submission
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jumlah Setoran (Rp)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Contoh: 50000" {...field} />
              </FormControl>
              <FormDescription>
                Masukkan jumlah yang ingin Anda setorkan secara rutin.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="frequency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Frekuensi Setoran</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih frekuensi" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="daily">Harian</SelectItem>
                  <SelectItem value="weekly">Mingguan</SelectItem>
                  <SelectItem value="monthly">Bulanan</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Pilih seberapa sering Anda ingin melakukan setoran.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Add conditional inputs here if needed, e.g., day of week for weekly, day of month for monthly */}

        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Tanggal Mulai Setoran</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP', { locale: dateFnsLocaleId })
                      ) : (
                        <span>Pilih tanggal</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date(new Date().setDate(new Date().getDate() -1)) // Disable past dates
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Pilih tanggal pertama untuk setoran rutin Anda.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div>
          <Button type="submit" className="w-full sm:w-auto" disabled={isLoading}>
            {isLoading ? 'Menyimpan Jadwal...' : 'Simpan Jadwal Setoran'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
