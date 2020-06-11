window.onload = () => {
    const dayOff = new Date(2020, 5, 20);
    const now = new Date();

    let input = document.getElementById('text');
    input.value = diff_days(dayOff, now);

    function diff_days(dt2, dt1)
    {
        var diff =(dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60 * 60 * 24;
        return Math.abs(Math.round(diff));
    }
}