using System;
namespace DataAccess
{
    interface IRepositoryBase<T>
     where T : class
    {
        void Add(T item);
        System.Collections.Generic.IEnumerable<T> All();
        void Delete(T item);
        T FirstOrDefault(Predicate<T> filter);
        System.Collections.Generic.IEnumerable<T> Where(Predicate<T> filter);
    }
}
