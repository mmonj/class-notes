import java.util.Comparator;
import java.util.Iterator;
import java.util.Optional;
import java.util.Spliterator;
import java.util.function.*;
import java.util.stream.*;

public class MockStream implements Stream {
    @Override
    public Stream filter(Predicate predicate) {
        return null;
    }

    @Override
    public IntStream mapToInt(ToIntFunction mapper) {
        return null;
    }

    @Override
    public LongStream mapToLong(ToLongFunction mapper) {
        return null;
    }

    @Override
    public DoubleStream mapToDouble(ToDoubleFunction mapper) {
        return null;
    }

    @Override
    public Stream distinct() {
        return null;
    }

    @Override
    public Stream sorted() {
        return null;
    }

    @Override
    public Stream sorted(Comparator comparator) {
        return null;
    }

    @Override
    public Stream peek(Consumer action) {
        return null;
    }

    @Override
    public Stream limit(long maxSize) {
        return null;
    }

    @Override
    public Stream skip(long n) {
        return null;
    }

    @Override
    public void forEach(Consumer action) {

    }

    @Override
    public void forEachOrdered(Consumer action) {

    }

    @Override
    public Object[] toArray() {
        return new Object[0];
    }

    @Override
    public Object reduce(Object identity, BinaryOperator accumulator) {
        return null;
    }

    @Override
    public Optional reduce(BinaryOperator accumulator) {
        return Optional.empty();
    }

    @Override
    public Optional min(Comparator comparator) {
        return Optional.empty();
    }

    @Override
    public Optional max(Comparator comparator) {
        return Optional.empty();
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public boolean anyMatch(Predicate predicate) {
        return false;
    }

    @Override
    public boolean allMatch(Predicate predicate) {
        return false;
    }

    @Override
    public boolean noneMatch(Predicate predicate) {
        return false;
    }

    @Override
    public Optional findFirst() {
        return Optional.empty();
    }

    @Override
    public Optional findAny() {
        return Optional.empty();
    }

    @Override
    public Object collect(Collector collector) {
        return null;
    }

    @Override
    public Object collect(Supplier supplier, BiConsumer accumulator, BiConsumer combiner) {
        return null;
    }

    @Override
    public Object reduce(Object identity, BiFunction accumulator, BinaryOperator combiner) {
        return null;
    }

    @Override
    public Object[] toArray(IntFunction generator) {
        return new Object[0];
    }

    @Override
    public DoubleStream flatMapToDouble(Function mapper) {
        return null;
    }

    @Override
    public LongStream flatMapToLong(Function mapper) {
        return null;
    }

    @Override
    public IntStream flatMapToInt(Function mapper) {
        return null;
    }

    @Override
    public Stream flatMap(Function mapper) {
        return null;
    }

    @Override
    public Stream map(Function mapper) {
        return null;
    }

    @Override
    public Iterator iterator() {
        return null;
    }

    @Override
    public Spliterator spliterator() {
        return null;
    }

    @Override
    public boolean isParallel() {
        return false;
    }

    @Override
    public BaseStream sequential() {
        return null;
    }

    @Override
    public BaseStream parallel() {
        return null;
    }

    @Override
    public BaseStream unordered() {
        return null;
    }

    @Override
    public BaseStream onClose(Runnable closeHandler) {
        return null;
    }

    @Override
    public void close() {

    }
}
