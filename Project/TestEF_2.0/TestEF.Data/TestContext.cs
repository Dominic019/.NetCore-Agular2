using System;
using Microsoft.EntityFrameworkCore;
using TestEF.Dommain;
using System.Reflection;
using System.IO;

namespace TestEF.Data
{
    public class TestContext: DbContext
    {
        public TestContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<TestModel> TestModel { get; set; }
    }
}
