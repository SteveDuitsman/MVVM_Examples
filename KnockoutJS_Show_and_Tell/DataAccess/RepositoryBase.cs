using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class RepositoryBase<T> : DataAccess.IRepositoryBase<T> where T : class
    {
        protected List<T> data = new List<T>();

        public IEnumerable<T> All()
        {
            return data;
        }

        public IEnumerable<T> Where(Predicate<T> filter)
        {
            return data.Where(d => filter.Invoke(d));
        }

        public T FirstOrDefault(Predicate<T> filter)
        {
            return data.FirstOrDefault(d => filter.Invoke(d));
        }

        public void Add(T item)
        {
            data.Add(item);
        }

        public void Delete(T item)
        {
            data.Remove(item);
        }
    }
}
