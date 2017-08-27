using System;
using System.Linq;
using TestEF.Data;
using TestEF.Dommain;

namespace TestEF.Data
{
    public static class DbInitializer
    {
        public static void Initialize(TestContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.TestModel.Any())
            {
                return;   // DB has been seeded
            }

            var TestModels = new TestModel[]
            {
            new TestModel{Id=100,Description="Alexander"},
            new TestModel{Id=101,Description="Alonso"},
            new TestModel{Id=102,Description="Anand"},
            new TestModel{Id=103,Description="Barzdukas"},
            new TestModel{Id=104,Description="Lilo"},
            new TestModel{Id=105,Description="Justice"},
            new TestModel{Id=106,Description="Norman"},
            new TestModel{Id=107,Description="Olivetto"}
            };

            //foreach (TestModel test in TestModels)
            //{
            //    context.TestModel.Remove(test);
            //}
            //context.SaveChanges();

            foreach (TestModel test in TestModels)
            {
                context.TestModel.Add(test);
            }
            context.SaveChanges();
        }
    }
}